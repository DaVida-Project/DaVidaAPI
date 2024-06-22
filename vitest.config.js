import { defineConfig, configDefaults } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/Api'),
      '@app': path.resolve(__dirname, './src/App'),
      '@config': path.resolve(__dirname, './src/Config'),
      '@database': path.resolve(__dirname, './src/Database'),
      '@libs': path.resolve(__dirname, './src/Libs'),
      '@middlewares': path.resolve(__dirname, './src/Middlewares'),
      '@routes': path.resolve(__dirname, './src/Routes'),
      '@server': path.resolve(__dirname, './src/Server'),
      '@appTypes': path.resolve(__dirname, './src/Types'),
      '@utils': path.resolve(__dirname, './src/Utils'),
    },
  },
});
