module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
