import ts from "@rollup/plugin-typescript";
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
    ts({ declaration: true, declarationMap: true, declarationDir: "dist" }),
  ],
  external: ["vitest", "pretty-format"],
}));
