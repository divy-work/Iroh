const pkg = require("./package.json");
import json from "@rollup/plugin-json";
import buble from "@rollup/plugin-buble";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

var config = {
  input: "src/index.js",
}
config.output = { name: "iroh", format: 'iife', file: 'dist/browser.js', paths: {
  "acorn/dist/walk": "acorn/dist/walk"
} }
config.external = []
config.plugins = [
  json(),
  buble({ transforms: { dangerousForOf: true } }),
  resolve({
    browser: true,
    jsnext: true,
    // dedupe: ["acorn/dist/walk"]
  }),
  commonjs({
    include: 'node_modules/**',
  })
];

export default config;
