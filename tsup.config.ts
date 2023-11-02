import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: './dist',
  tsconfig: './tsconfig.json',
  splitting: true,
  target: 'es2021',
  clean: true,
  dts: true,
  format: 'cjs',
  minify: true,
  treeshake: true,
  metafile: true,
  noExternal: ['react', '@react-email/render', '@react-email/components'],
});
