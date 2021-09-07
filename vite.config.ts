import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'mooli-mobile',
          camel2DashComponentName: false,
          style: (name) => {
            return `mooli-mobile/dist/esm/${name}/style/index.css`;
          },
        },
      ],
    }),
  ],
});
