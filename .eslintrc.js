module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // prettier
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
