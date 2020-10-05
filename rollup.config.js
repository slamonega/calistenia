import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import { eslint } from 'rollup-plugin-eslint';
import json from '@rollup/plugin-json';
import manifest from 'rollup-plugin-manifest-json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import riot from 'rollup-plugin-riot';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

var root = pkg.root;
var resconf = { browser: true };
var eslintconf = {
  exclude: [ 'node_modules/**' ],
};

export default [ {
  input: 'src/main.js',
  output: [
    {
      file: pkg.browser,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    riot(),
    resolve( resconf ),
    eslint( eslintconf ),
    commonjs(),
    json(),
    terser(),
    copy( {
      targets: [
        { src: 'index.html', dest: 'dist' },
        { src: 'favicon/*', dest: 'dist' },
      ]
    } ),
    manifest( {
      input: 'manifest.json',
      manifest: {
        name: pkg.name,
        short_name: pkg.name,
        description: pkg.description,
        categories: pkg.keywords,
        scope: root,
        start_url: root
      },
      minify: true
    } ),
    postcss({
      extract: true,
      plugins: [
        require('postcss-import')({}),
        require('cssnano')({
            preset: 'default',
        }),
      ]
    }),
  ]
}, {
  input: 'src/service-worker.js',
  output: [
    {
      file: 'dist/sw.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve( resconf ),
    eslint( eslintconf ),
    json(),
    terser()
  ]
} ]
