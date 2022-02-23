module.exports = {
  // stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
