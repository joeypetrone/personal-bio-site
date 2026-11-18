import { defineConfig } from 'vite';

// Vite serves index.html from the project root and builds into dist/.
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 4's Sass is old; hide its deprecation warnings.
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
});
