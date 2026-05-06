/**
 * GeekBud Theme Configuration
 * Dark theme with green accent for cannabis culture
 */

export const Colors = {
  // Primary colors
  background: '#0a1f05', // Dark green background
  accent: '#4a9c1a', // Bright green accent
  accentLight: '#7ab831', // Light green for hover states
  accentDark: '#2d6b0d', // Dark green for pressed states

  // Text colors
  textPrimary: '#ffffff', // White text
  textSecondary: '#b3b3b3', // Gray text for secondary info
  textTertiary: '#808080', // Darker gray for disabled/hints
  textInverse: '#0a1f05', // For text on green backgrounds

  // Semantic colors
  success: '#10b981', // Green for success states
  error: '#ef4444', // Red for errors
  warning: '#f59e0b', // Amber for warnings
  info: '#3b82f6', // Blue for info

  // Surface colors
  surface1: '#1a2d15', // Slightly lighter than background
  surface2: '#2a3d25', // Even lighter for elevation
  surface3: '#3a4d35', // More elevated surface
  border: '#3a4d35', // Border color (surface3)
  separator: '#2a3d25', // Divider lines (surface2)

  // Special colors
  zappyGreen: '#4a9c1a', // Zappy the gecko theme color
  zappyGlow: 'rgba(74, 156, 26, 0.3)', // Glow effect

  // Overlay colors
  overlay: 'rgba(10, 31, 5, 0.8)', // Dark overlay
  overlayLight: 'rgba(10, 31, 5, 0.5)', // Light overlay
};

export const Typography = {
  // Font families (use system fonts as fallback)
  family: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },

  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const Shadow = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

export const Theme = {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadow,
};

export default Theme;
