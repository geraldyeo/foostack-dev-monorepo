import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      replace({
        ENVIRONMENT: JSON.stringify('production'),
      }),
      external({ includeDependencies: true }),
      url(),
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
    ],
  },
];
