export const color = {
  // Palette
  primary: '#1a61f7', // blue
  primaryLight: 'rgba(26, 97, 247, 0.2)',
  secondary: '#111111', // black
  tertiary: '#DDDDDD', // grey
  tertiaryLight: '#666666', // grey
  white: '#fff',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#448028', // Evergreen
  negative: '#D43900', // Crimson
  warning: '#A15C20', // Burnt sienna
  selected: '#0271B6', // Navy
};

export const radious = {
  default: 24,
  small: 18,
  sqr: 4,
};

export const typography = {
  type: {
    primary:
      "'Spoqa Han Sans Neo', 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'",
    // primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
  spacing: {
    default: 1.25,
    small: 0.75,
  },
} as const;
