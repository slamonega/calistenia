import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import riot from 'rollup-plugin-riot';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [ {
	input: 'src/main.js',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'cjs',
			sourcemap: true
		}
	],
	plugins: [
		resolve(),
		json(),
		riot(),
		commonjs(),
		terser()
	]
}, {
	input: 'src/service-worker.js',
	output: [
		{
			file: 'dist/sw.js',
			format: 'cjs',
			sourcemap: true
		}
	],
	plugins: [
		resolve(),
		json(),
		terser()
	]
} ]
