import { build } from "esbuild";
import glob from "fast-glob";

const entries = await glob([
  "src/**/*.ts",
  "api/**/*.ts",
  "articles/**/*.ts",
  "streams/**/*.ts",
  "workers/**/*.ts",
  "utils/**/*.ts",
  "models/**/*.ts",
  "config/**/*",
  "types/**/*.ts",
]);

await build({
  entryPoints: entries,
  outdir: "dist",
  platform: "node",
  target: "node23",
  format: "cjs",
  outbase: ".",
  tsconfig: "tsconfig.json",
  sourcemap: true,
  logLevel: "info",
});
