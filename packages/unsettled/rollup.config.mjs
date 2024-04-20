import ts from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";

export default defineConfig(() => ({
  input: ["src/index.ts", "src/extend-expect.ts"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      chunkFileNames: "[name].js",
      format: "cjs",
      sourcemap: true,
    },
    {
      dir: "dist",
      entryFileNames: "[name].mjs",
      chunkFileNames: "[name].mjs",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    ts({
      declaration: true,
      declarationMap: true,
      declarationDir: "dist",
      module: "Node16",
    }),
  ],
  external: ["vitest"],
}));
