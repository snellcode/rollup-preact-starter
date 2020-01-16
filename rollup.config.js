import typescript from '@rollup/plugin-typescript'
import cleaner from 'rollup-plugin-cleaner'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias';
import htmlTemplate from 'rollup-plugin-generate-html-template';
const path = require('path');
import sourcemaps from 'rollup-plugin-sourcemaps';
export default {
  input: 'src/index.tsx',
  output: {
    format: 'iife',
    file: 'dist/main.js',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        {
          find: '@src',
          replacement: path.resolve(path.resolve(__dirname), 'src')
        }
      ]
    }),
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    resolve(),
    sourcemaps(),
    typescript(),
    commonjs({
      include: 'node_modules/**'
    }),
    postcss({
      extract: true
    }),
    htmlTemplate({
      template: 'src/index.html',
      target: 'index.html',
      includeCss: true
    }),
  ]
}
