import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import typescript from '@rollup/plugin-typescript';
import autoPreprocess from 'svelte-preprocess';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    format: "esm",
    name: "app",
    sourcemap: false,
    dir: "public"
  },
  plugins: [
    svelte({
      preprocess: autoPreprocess(),
      emitCss: true,
      compilerOptions: {
        dev: !production
      }
    }),
    css({ output: "bundle.css" }),
    copy({
      targets: [
        { src: "src/index.html", dest: "public" },
        { src: "src/global.css", dest: "public" },
        { src: "src/assets", dest: "public" },
        { src: "node_modules/@ionic/core/dist/ionic", dest: "public/ionic" },
        { src: "node_modules/@ionic/core/css", dest: "public/ionic" }
      ]
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),
    typescript({ sourceMap: !production }),

    !production && livereload("public"),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
