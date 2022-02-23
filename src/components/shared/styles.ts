export const color = {
  // Palette
  primary: '#FF4785', // Coral
  secondary: '#1EA7FD', // Ocean
  tertiary: '#DDDDDD', // Light grey

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  red: '#ff4400',

  // Calm
  blueLighter: '#E3F3FF', // rgba($color.blue, 12%)
  blueLight: '#F3FAFF', // rgba($color.blue, 6%)

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
} as const;
