import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import json from "@rollup/plugin-json";
import image from "rollup-plugin-img";
import url from "postcss-url";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm", exports: "named" },
    ],
    plugins: [
      json(),
      image({
        limit: 30000,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      del({ targets: ["dist/*"] }),
      postcss({
        plugins: [
          url({
            url: "inline",
          }),
        ],

        extensions: [".css", ".scss"],
        minimize: true,
        extract: "index.css",
        sourceMap: false,
        inject: false,
      }),
      external(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
    // anything "external" will not be included into the generated bundle
    // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
    external: [
      // regular dependencies should not be included as they will be automatically installed by the consuming application
      ...Object.keys(pkg.dependencies || {}),
      // peer dependencies should not be included as they are expected to be provided by the consuming application
      // https://nodejs.org/es/blog/npm/peer-dependencies/#the-solution-peer-dependencies
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    // extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
  },
];
