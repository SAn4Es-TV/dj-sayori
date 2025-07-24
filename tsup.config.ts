import { type Options, defineConfig } from "tsup";
import { copyFileSync } from 'fs'

export default defineConfig((options: Options) => ({
  entryPoints: ["src/**/*.ts"],
  clean: true,
  onSuccess() {
      copyFileSync('src/keepAlive.js', 'dist/keepAlive.js')  // ✅
  },
  format: "cjs",
  ...options,
}));
