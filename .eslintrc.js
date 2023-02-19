module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/prop-types': [0],
    'react/display-name': 'off',
  },
};
