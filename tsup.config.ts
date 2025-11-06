import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'es2023',
  clean: true,
  dts: true,
  minify: false,
  splitting: false,
  shims: true,
});
