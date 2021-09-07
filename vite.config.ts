import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { join } from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  server: {
    // port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://47.99.134.126:28019/api/v1',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: join(__dirname, './src/'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 定制主题样式
        modifyVars: {
          '@fill-body': '#fff',
        },
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  plugins: [
    reactRefresh(), // 热更新
    legacy({
      targets: ['Android >= 39', 'Chrome >= 39', 'Safari >= 10.1', 'iOS >= 10', '> 0.5%'],
      polyfills: ['es.promise', 'regenerator-runtime'],
    }), // 支持旧版本浏览器
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'mooli-mobile',
    //       camel2DashComponentName: false,
    //       style: (name) => {
    //         return `mooli-mobile/dist/esm/${name}/style/index.css`;
    //       },
    //     },
    //   ],
    // }), // 按需加载
  ],
});
