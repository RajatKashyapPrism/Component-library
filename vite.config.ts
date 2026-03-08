import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      include: ['src'],
      exclude: ['src/**/*.stories.tsx', 'src/main.tsx', 'src/App.tsx', 'src/stories'],
    }),
    {
      name: 'copy-tokens-css',
      closeBundle() {
        copyFileSync(
          resolve(__dirname, 'src/global.css'),
          resolve(__dirname, 'dist/tokens.css'),
        );
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react-aria-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'react-aria-components': 'ReactAriaComponents',
        },
      },
    },
    cssMinify: true,
  },
});
