/* eslint-disable no-template-curly-in-string */
// Project-wide babel config file for the monorepo
// babel configs for other packages are overridden with babel's `overrides` option
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // Stage 0
    '@babel/plugin-proposal-function-bind',
    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    '@babel/plugin-proposal-do-expressions',
    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
    //
    'babel-plugin-dev-expression',
    'macros',
  ],
  overrides: [
    {
      test: './packages/core',
      presets: ['@babel/preset-env', '@babel/typescript'],
    },
    {
      test: './packages/restyled',
      presets: ['@babel/preset-react'],
      plugins: [
        '@babel/plugin-transform-runtime',
        ['babel-plugin-styled-components', { displayName: false }],
        'lodash',
      ],
      env: {
        production: {
          plugins: ['transform-react-remove-prop-types'],
        },
      },
    },
    // {
    //   test: './clients/foostack-dev-site',
    //   presets: ['@babel/preset-react'],
    //   plugins: [
    //     '@babel/plugin-transform-async-to-generator',
    //     '@babel/plugin-transform-runtime',
    //     ['babel-plugin-styled-components', { displayName: false }],
    //     'add-module-exports',
    //   ],
    //   env: {
    //     development: {
    //       plugins: ['flow-react-proptypes'],
    //     },
    //     production: {
    //       plugins: [
    //         '@babel/plugin-transform-react-inline-elements',
    //         [
    //           'transform-imports',
    //           { lodash: { transform: 'lodash/${member}', preventFullImport: true } },
    //         ],
    //         'lodash',
    //       ],
    //     },
    //     test: {
    //       presets: [['@babel/preset-env', { modules: 'commonjs', debug: false }]],
    //       plugins: ['@babel/plugin-transform-flow-strip-types', 'dynamic-import-node'],
    //     },
    //   },
    // },
  ],
};
