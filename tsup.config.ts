import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/test.ts"],   // tu entrypoint principal
  format: ["esm"],    // genera ambas variantes
  dts: {
    entry: "src/index.ts"
  },                 // genera .d.ts
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "tsconfig.json"
});
