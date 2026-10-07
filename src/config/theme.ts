/**
 * TeDiWings Technologies - Visual Design System Tokens
 * Derived exclusively from the TeDiWings Technologies Logo Palette:
 * Black (#050505) + Deep Blue (#061A63) + Electric Blue (#075DFF) + Bright Cyan (#00C8FF)
 * + Orange (#FF5A00) + Bright Orange (#FF7A00) + Golden Yellow (#FFC928) + White/Silver (#D7DCE3)
 */

export const brandColors = {
  // Primary Foundation
  black: '#050505',
  deepBlue: '#061A63',
  white: '#FFFFFF',
  silver: '#D7DCE3',

  // Secondary Technology Identity
  electricBlue: '#075DFF',
  cyan: '#00C8FF',

  // Energy & Strategic Accent
  orange: '#FF5A00',
  brightOrange: '#FF7A00',
  goldenYellow: '#FFC928',

  // Typography & UI Surfaces
  textPrimary: '#111827',
  textSecondary: '#5B6472',
  background: '#FFFFFF',
  backgroundSoft: '#F7F8FA',
  border: '#E5E7EB',
  borderDark: 'rgba(255, 255, 255, 0.10)',

  // Legacy mappings for backwards-compatible lookups
  blue: '#075DFF',
  blueDeep: '#061A63',
  blueElectric: '#00C8FF',
  amber: '#FFC928',
  gold: '#FFC928',
  slate: '#5B6472',
  light: '#F7F8FA',
} as const;

export const brandGradients = {
  blue: 'linear-gradient(135deg, #061A63, #075DFF, #00C8FF)',
  orange: 'linear-gradient(135deg, #FF5A00, #FF7A00, #FFC928)',
  technology: 'linear-gradient(135deg, #075DFF, #00C8FF)',
  darkAtmosphere:
    'radial-gradient(circle at 20% 20%, rgba(0, 200, 255, 0.12), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255, 122, 0, 0.10), transparent 35%), #050505',
} as const;

export const theme = {
  colors: brandColors,
  gradients: brandGradients,
  fonts: {
    primary: 'var(--font-poppins)',
  },
  typography: {
    heroHeading: {
      clamp: 'clamp(32px, 3.8vw, 48px)',
      weight: 700,
      lineHeight: 1.15,
      letterSpacing: '-1px',
    },
    sectionHeading: {
      clamp: 'clamp(24px, 2.6vw, 38px)',
      weight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.6px',
    },
    subheading: {
      clamp: 'clamp(20px, 2vw, 30px)',
      weight: 600,
      lineHeight: 1.3,
    },
    body: {
      size: '16px',
      weight: 400,
      lineHeight: 1.7,
      color: '#5B6472',
    },
    bodyIntro: {
      size: '17px',
      weight: 400,
      lineHeight: 1.75,
      color: '#5B6472',
    },
    smallLabel: {
      size: '12px',
      weight: 600,
      letterSpacing: '1.5px',
      transform: 'uppercase',
    },
    navigation: {
      size: '14px',
      weight: 500,
      activeWeight: 600,
      letterSpacing: '0px',
    },
    button: {
      size: '14px',
      weight: 600,
    },
  },
  layout: {
    containerMaxWidth: '1240px',
    containerPaddingDesktop: '32px',
    containerPaddingTablet: '24px',
    containerPaddingMobile: '20px',
    sectionPaddingDesktop: '96px',
    sectionPaddingFeature: '112px',
    sectionPaddingMobile: '64px',
  },
  radii: {
    card: '18px',
    button: '8px',
    tag: '6px',
  },
  shadows: {
    subtle: '0 4px 20px -2px rgba(6, 26, 99, 0.04)',
    elevated: '0 12px 30px -4px rgba(6, 26, 99, 0.08)',
    glowOrange: '0 8px 24px -4px rgba(255, 90, 0, 0.35)',
    glowBlue: '0 8px 24px -4px rgba(7, 93, 255, 0.35)',
  },
  brand: {
    name: 'TeDiWings Technologies',
    shortName: 'TeDiWings',
    tagline: 'Together We Build, Together We Fly.',
  },
} as const;

export default theme;
