module.exports = {
  extends: ['react-app'],
  rules: {
    'prefer-const': 'warn',
    'react/jsx-no-useless-fragment': 'off',
    'quotes': ['error', 'single'],
    'react/self-closing-comp': ['warn', { 'component': true, 'html': true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@tests', '../tests'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@config', './src/config'],
          ['@pages', './src/pages'],
          ['@routes', './src/routes/index.tsx'],
          ['@services', './src/services'],
          ['@store', './src/store'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils']
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
      },
    },
  },
};
