import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';

const viteConfig = defineViteConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    },
  },
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    watch: false,
    coverage: {
      provider: 'istanbul',
      include: ["**/*.ts", "**/*.tsx"],
      reporter: ['text', 'json', 'html'],
      all: true,
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);
