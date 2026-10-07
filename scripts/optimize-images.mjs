/**
 * TeDiWings Technologies - Automated Image Optimization Pipeline
 * Scans page-specific image directories (src/pages/[page]/assets/images)
 * Converts JPG/JPEG/PNG to high-performance WebP (and optional AVIF),
 * resizes oversized images, preserves transparency, removes unnecessary metadata.
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1920;
const QUALITY = 82;
const PAGES_DIR = path.resolve('src/pages');

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const basename = path.basename(entry.name, ext);
        const webpPath = path.join(dirPath, `${basename}.webp`);

        console.log(`[OPTIMIZING] ${entry.name} -> ${basename}.webp`);

        try {
          const image = sharp(fullPath);
          const metadata = await image.metadata();

          let pipeline = sharp(fullPath).rotate(); // auto-rotate based on EXIF

          if (metadata.width && metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
          }

          await pipeline
            .webp({ quality: QUALITY, effort: 6 })
            .toFile(webpPath);

          console.log(`[SUCCESS] Generated ${basename}.webp`);
        } catch (error) {
          console.error(`[ERROR] Failed to optimize ${entry.name}:`, error.message);
        }
      }
    }
  }
}

async function runOptimization() {
  console.log('--- TeDiWings Image Optimization Pipeline Starting ---');

  const targetDir = fs.existsSync(path.resolve('src/views'))
    ? path.resolve('src/views')
    : path.resolve('src/pages');

  if (!fs.existsSync(targetDir)) {
    console.log('No page views directory found.');
    return;
  }

  const pageDirs = fs.readdirSync(targetDir, { withFileTypes: true });

  for (const page of pageDirs) {
    if (page.isDirectory()) {
      const imageDir = path.join(targetDir, page.name, 'assets', 'images');
      if (fs.existsSync(imageDir)) {
        console.log(`Checking ${page.name} assets at: ${imageDir}`);
        await processDirectory(imageDir);
      }
    }
  }

  console.log('--- TeDiWings Image Optimization Complete ---');
}

runOptimization();
