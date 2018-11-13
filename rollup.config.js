import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: {
    file: pkg.main,
    format: "cjs"
  },
  plugins: [resolve(), babel(), uglify()],
  external: ["react", "socket.io"]
};
