import { defineConfig } from 'vite';
import path from 'path';

console.log('>>> USING VITE CONFIG FOR MYTHEME <<<');

export default defineConfig({
  root: 'src',

  // 🔑 REQUIRED FOR DRUPAL THEMES
  base: '/themes/custom/mytheme/dist/',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        style: path.resolve(__dirname, 'src/scss/style.scss'),
        card: path.resolve(__dirname, 'src/scss/components/card.scss'),
        new: path.resolve(__dirname, 'src/js/new.js'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';

          if (name.endsWith('.css')) {
            return 'css/[name].css';
          }

          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },

  // ✅ resolve must be here (OPTIONAL)
  resolve: {
    alias: {
      // Use ONLY for JS imports if needed
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },
});
