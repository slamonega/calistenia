import resolve from '@rollup/plugin-node-resolve';
import riot from 'rollup-plugin-riot';
import { terser } from 'rollup-plugin-terser';

export default {
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
		riot(),
		terser()
	]
}
