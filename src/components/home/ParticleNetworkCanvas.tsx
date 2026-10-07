"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  baseRadius: number;
  currentRadius: number;
  color: string;
  glowColor: string;
  hasGlow: boolean;
  type: "normal" | "highlight" | "accent";
  baseAlpha: number;
  currentAlpha: number;
  dispX: number;
  dispY: number;
  energy: number;
  oscFreq: number;
  oscPhase: number;
  oscAmp: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

interface ParticleNetworkCanvasProps {
  className?: string;
  interactionTargetRef?: React.RefObject<HTMLElement | null>;
  onTelemetryUpdate?: (data: {
    particleCount: number;
    fps: number;
    activeConnections: number;
    isInteracting: boolean;
  }) => void;
}

export function ParticleNetworkCanvas({
  className = "",
  interactionTargetRef,
  onTelemetryUpdate,
}: ParticleNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse & interaction state refs (to avoid React re-renders in 60fps loop)
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    isHovering: false,
    radius: 165,
    lastActive: 0,
  });

  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });

  // FPS calculation
  const fpsRef = useRef({
    frames: 0,
    lastTime: performance.now(),
    fps: 60,
  });

  // Spawn and position particles with right-heavy distribution
  const initParticles = useCallback((width: number, height: number) => {
    // Dynamic particle count based on screen width
    let count: number;
    if (width > 1200) {
      count = 230; // Desktop
    } else if (width > 768) {
      count = 150; // Tablet
    } else {
      count = 85; // Mobile
    }

    const particles: Particle[] = [];

    // Colors according to brand specification:
    // ~75% Electric Blue / Cyan
    // ~20% Deep Tech Blue
    // ~5% Orange / Gold accent
    const cyanBlues = ["#00C8FF", "#075DFF", "#38BDF8", "#0284C7"];
    const deepBlues = ["#061A63", "#1E3A8A", "#1D4ED8", "#0F172A"];
    const orangeAccents = ["#FF5A00", "#FF7A00", "#FFC928"];

    for (let i = 0; i < count; i++) {
      // 72% placed on the right 55-60% of the canvas; 28% on the left calm area
      const isRightSide = Math.random() < 0.72;
      let x: number;
      let y: number;

      if (isRightSide) {
        // Biased towards right 55% to 98%
        const minX = width * 0.42;
        x = minX + Math.random() * (width - minX);
      } else {
        // Calm left side (0% to 42%)
        x = Math.random() * (width * 0.42);
      }
      y = Math.random() * height;

      // Particle type distribution
      const randType = Math.random();
      let type: "normal" | "highlight" | "accent";
      let baseRadius: number;
      let color: string;
      let glowColor: string;
      let hasGlow: boolean;
      let baseAlpha: number;

      if (randType < 0.05) {
        // Rare accent particles (3px - 4.5px, orange/gold)
        type = "accent";
        baseRadius = 1.6 + Math.random() * 0.8; // diameter ~3.2px - 4.8px
        color = orangeAccents[Math.floor(Math.random() * orangeAccents.length)];
        glowColor = "rgba(255, 90, 0, 0.45)";
        hasGlow = true;
        baseAlpha = isRightSide ? 0.85 : 0.45;
      } else if (randType < 0.25) {
        // Highlighted particles (2px - 3.5px, cyan glow)
        type = "highlight";
        baseRadius = 1.1 + Math.random() * 0.6; // diameter ~2.2px - 3.4px
        color = "#00C8FF";
        glowColor = "rgba(0, 200, 255, 0.4)";
        hasGlow = true;
        baseAlpha = isRightSide ? 0.8 : 0.35;
      } else {
        // Normal particles (1px - 2px)
        type = "normal";
        baseRadius = 0.55 + Math.random() * 0.45; // diameter ~1.1px - 2.0px
        hasGlow = false;
        glowColor = "transparent";

        const randColor = Math.random();
        if (randColor < 0.75) {
          color = cyanBlues[Math.floor(Math.random() * cyanBlues.length)];
          baseAlpha = isRightSide ? 0.45 + Math.random() * 0.3 : 0.15 + Math.random() * 0.18;
        } else {
          color = deepBlues[Math.floor(Math.random() * deepBlues.length)];
          baseAlpha = isRightSide ? 0.35 + Math.random() * 0.25 : 0.12 + Math.random() * 0.15;
        }
      }

      // Very subtle slow drift velocity (2 - 10px over seconds)
      const speed = 0.06 + Math.random() * 0.14;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      particles.push({
        id: i,
        x,
        y,
        originX: x,
        originY: y,
        vx,
        vy,
        baseRadius,
        currentRadius: baseRadius,
        color,
        glowColor,
        hasGlow,
        type,
        baseAlpha,
        currentAlpha: baseAlpha,
        dispX: 0,
        dispY: 0,
        energy: 0,
        oscFreq: 0.0008 + Math.random() * 0.0016,
        oscPhase: Math.random() * Math.PI * 2,
        oscAmp: 1.2 + Math.random() * 2.5,
      });
    }

    particlesRef.current = particles;
  }, []);

  // Update canvas size and reinitialize particles
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dimensionsRef.current = { width, height, dpr };

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    initParticles(width, height);
  }, [initParticles]);

  // Click / tap creates an outward tactile ripple wave
  const createRipple = useCallback((x: number, y: number) => {
    ripplesRef.current.push({
      x,
      y,
      radius: 5,
      maxRadius: 180,
      alpha: 0.5,
      speed: 3.5,
    });
  }, []);

  // Main rendering animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let lastFrameTime = performance.now();
    let telemetryTimer = 0;

    const render = (currentTime: number) => {
      animFrameIdRef.current = requestAnimationFrame(render);

      if (!isVisibleRef.current) return;

      const dt = Math.min((currentTime - lastFrameTime) / 1000, 0.1);
      lastFrameTime = currentTime;

      // Track FPS
      fpsRef.current.frames++;
      if (currentTime - fpsRef.current.lastTime >= 1000) {
        fpsRef.current.fps = Math.round(
          (fpsRef.current.frames * 1000) / (currentTime - fpsRef.current.lastTime)
        );
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = currentTime;
      }

      const { width, height, dpr } = dimensionsRef.current;
      if (width === 0 || height === 0) return;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate interpolation
      const mouse = mouseRef.current;
      if (mouse.isHovering) {
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;
      }

      const particles = particlesRef.current;
      const numParticles = particles.length;

      // Dynamic connection threshold based on screen size
      const maxDist = width > 768 ? 130 : 95;
      const maxDistSq = maxDist * maxDist;
      const mouseRadius = mouse.radius;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      // Update ripples
      const ripples = ripplesRef.current;
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += ripple.speed;
        ripple.alpha = Math.max(0, 0.45 * (1 - ripple.radius / ripple.maxRadius));

        // Draw subtle expanding ring
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 200, 255, ${ripple.alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (ripple.radius >= ripple.maxRadius) {
          ripples.splice(r, 1);
        }
      }

      // Physics update step for all particles
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // 1. Organic slow drift
        p.originX += p.vx;
        p.originY += p.vy;

        // Soft wrapping / boundary bounce
        if (p.originX < -20) p.originX = width + 20;
        else if (p.originX > width + 20) p.originX = -20;
        if (p.originY < -20) p.originY = height + 20;
        else if (p.originY > height + 20) p.originY = -20;

        // 2. Gentle organic oscillation (breathing drift)
        p.oscPhase += p.oscFreq * 60;
        const waveX = Math.sin(p.oscPhase) * p.oscAmp;
        const waveY = Math.cos(p.oscPhase * 0.8) * (p.oscAmp * 0.7);

        // 3. Mouse repulsion physics (gentle push, micro-shimmer, brightens, elastic recovery)
        let targetDispX = 0;
        let targetDispY = 0;

        if (mouse.isHovering) {
          const dx = p.originX + waveX - mouse.x;
          const dy = p.originY + waveY - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq && distSq > 0.1) {
            const dist = Math.sqrt(distSq);
            // Smooth quadratic falloff
            const ratio = 1 - dist / mouseRadius;
            const pushFactor = Math.pow(ratio, 1.8) * 36;
            const nx = dx / dist;
            const ny = dy / dist;

            // Micro-shimmer excitation
            const shimmer = Math.sin(currentTime * 0.015 + p.id * 1.5) * (ratio * 1.8);

            targetDispX = nx * pushFactor + shimmer;
            targetDispY = ny * pushFactor + shimmer;

            // Increase particle energy/brightness
            p.energy = Math.min(1, p.energy + ratio * 0.12);
          }
        }

        // Ripple influence
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = p.originX - rip.x;
          const rdy = p.originY - rip.y;
          const rdist = Math.hypot(rdx, rdy);
          const diff = Math.abs(rdist - rip.radius);
          if (diff < 24) {
            const waveStrength = (1 - diff / 24) * rip.alpha * 12;
            const nrx = rdx / (rdist || 1);
            const nry = rdy / (rdist || 1);
            targetDispX += nrx * waveStrength;
            targetDispY += nry * waveStrength;
            p.energy = Math.min(1, p.energy + 0.3);
          }
        }

        // 4. Spring return physics (smooth return to original trajectory)
        p.dispX += (targetDispX - p.dispX) * 0.085;
        p.dispY += (targetDispY - p.dispY) * 0.085;

        // Energy dissipation
        p.energy *= 0.95;

        // Final calculated screen position
        p.x = p.originX + waveX + p.dispX;
        p.y = p.originY + waveY + p.dispY;

        // Dynamic brightness & size modulation
        p.currentAlpha = Math.min(1, p.baseAlpha + p.energy * 0.5);
        p.currentRadius = p.baseRadius * (1 + p.energy * 0.3);
      }

      // Draw connecting lines
      let activeConnections = 0;
      ctx.lineWidth = 1;

      for (let i = 0; i < numParticles; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];

          // Quick spatial exclusion
          const dx = p1.x - p2.x;
          if (Math.abs(dx) > maxDist) continue;
          const dy = p1.y - p2.y;
          if (Math.abs(dy) > maxDist) continue;

          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            activeConnections++;
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / maxDist;

            // Base low opacity
            let alpha = factor * 0.13;

            // Check if cursor is nearby to boost line brightness
            let isLineExcited = false;
            if (mouse.isHovering) {
              const midX = (p1.x + p2.x) * 0.5;
              const midY = (p1.y + p2.y) * 0.5;
              const mdx = midX - mouse.x;
              const mdy = midY - mouse.y;
              if (mdx * mdx + mdy * mdy < mouseRadiusSq * 0.6) {
                isLineExcited = true;
                alpha = Math.min(0.32, alpha + 0.18);
              }
            }

            // Line stroke style
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (p1.type === "accent" || p2.type === "accent") {
              ctx.strokeStyle = `rgba(255, 122, 0, ${alpha * 1.2})`;
            } else if (isLineExcited) {
              ctx.strokeStyle = `rgba(0, 200, 255, ${alpha})`;
            } else {
              ctx.strokeStyle = `rgba(7, 93, 255, ${alpha})`;
            }

            ctx.stroke();
          }
        }

        // Connect cursor to closest particles within interaction radius
        if (mouse.isHovering) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdistSq = mdx * mdx + mdy * mdy;

          if (mdistSq < mouseRadiusSq * 0.75) {
            const mdist = Math.sqrt(mdistSq);
            const mFactor = 1 - mdist / (mouseRadius * 0.86);
            const tetherAlpha = mFactor * 0.28;

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.strokeStyle = `rgba(0, 200, 255, ${tetherAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentRadius, 0, Math.PI * 2);

        // Subtle glow for highlights and excited particles
        if (p.hasGlow || p.energy > 0.2) {
          ctx.shadowBlur = p.hasGlow ? 7 : 4;
          ctx.shadowColor = p.glowColor;
        }

        // Apply alpha to particle color
        ctx.globalAlpha = p.currentAlpha;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      // Mouse cursor ambient glow aura
      if (mouse.isHovering) {
        const auraGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 0.6
        );
        auraGrad.addColorStop(0, "rgba(0, 200, 255, 0.06)");
        auraGrad.addColorStop(0.5, "rgba(7, 93, 255, 0.025)");
        auraGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Report telemetry periodically (every 500ms)
      telemetryTimer += dt;
      if (telemetryTimer >= 0.5 && onTelemetryUpdate) {
        telemetryTimer = 0;
        onTelemetryUpdate({
          particleCount: numParticles,
          fps: fpsRef.current.fps,
          activeConnections,
          isInteracting: mouse.isHovering,
        });
      }
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [onTelemetryUpdate]);

  // Set up listeners (Resize, Visibility, Pointer/Touch)
  useEffect(() => {
    handleResize();

    const container = containerRef.current;
    if (!container) return;

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // IntersectionObserver to pause loop when scrolled out of viewport
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    const interactionEl = interactionTargetRef?.current || container;

    // Mouse & Touch interaction handlers
    const updateMousePos = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      if (!mouseRef.current.isHovering) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
      mouseRef.current.isHovering = true;
      mouseRef.current.lastActive = performance.now();
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateMousePos(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.targetX = -9999;
      mouseRef.current.targetY = -9999;
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = clientXFromEvent(e) - rect.left;
      const y = clientYFromEvent(e) - rect.top;
      createRipple(x, y);
    };

    const clientXFromEvent = (e: PointerEvent | MouseEvent) => e.clientX;
    const clientYFromEvent = (e: PointerEvent | MouseEvent) => e.clientY;

    interactionEl.addEventListener("pointermove", handlePointerMove, { passive: true });
    interactionEl.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    interactionEl.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      interactionEl.removeEventListener("pointermove", handlePointerMove);
      interactionEl.removeEventListener("pointerleave", handlePointerLeave);
      interactionEl.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [handleResize, createRipple, interactionTargetRef]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none touch-none ${className}`}
      style={{ touchAction: "none" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default ParticleNetworkCanvas;
