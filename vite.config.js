import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // 项目根目录
  root: './src/',
  // 项目部署的基础路径
  base: '/',
  // 环境配置
  mode: 'development',
  // 全局变量替换 Record<string, string>
  define: {},
  resolve: {
    alias: {
      "root": path.resolve(__dirname, ""),
      "@": path.resolve(__dirname, "src"),
      "v": path.resolve(__dirname, "src/components"),
    },
    dedupe: [],
    // 情景导出package.json 配置中的 exports 字段
    conditions: [],
    // 解析package.json 中的字段
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    // 是否自动打开浏览器
    open: true,
    host: "localhost",
    port: "9191",
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 为开发服务器配置 CORS
    cors: true,
    // 设置为 true 强制使依赖预构建
    force: true,
    //代理
    proxy: {
      "/common": {
        target: "https://api.apishop.net", // 所要代理的目标地址
        rewrite: (path) => path.replace(/^\/api/, "/common"), // 重写传过来的path路径，
        changeOrigin: true,
      },
    },
  },
  // 继承自 esbuild 转换选项， 最常见的用例是自定义 JSX
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`
  },
  // 静态资源处理   字符串 || 正则表达式
  assetsInclude: '',
  // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
  logLevel: 'info',
  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  plugins: [
    vue(),
    //按需导入element-plus组件
    ViteComponents({
      customComponentResolvers: [ElementPlusResolver()],
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
        },
      ],
    }),
  ],
  build: {
    // 浏览器兼容性 ‘esnext’ | 'modules'
    target: 'modules',
    //输出路径
    outDir: '../dist',
    // 生成静态资源的存放路径
    assetsDir: '../assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
    assetsInlineLimit: 4096,
    // 启动 / 禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 soutrce map 文件
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置,新增页面在此处增加新入口
    rollupOptions: {
      input: {
        admin: path.resolve(__dirname, 'src/index.html'),
        shop: path.resolve(__dirname, 'src/shop/index.html'),
        home: path.resolve(__dirname, 'src/home/index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    },

    // @rollup/plugin-commonjs 插件的选项
    commonjsOptions: {},

    // 构建的库
    // lib: { entry: string, name?: string, formats?: ('es' | 'cjs' | 'umd' | 'iife')[], fileName?: string },

    // 当设置为 true, 构建后将会生成 manifest.json 文件
    manifest: false,

    // 设置为 false 可以禁用最小化混淆
    // 或是用来指定是应用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: 'terser',

    // 传递给 Terser 的更多 minify 选项
    terserOptions: {},

    // 设置为false 来禁用将构建好的文件写入磁盘
    write: true,

    // 默认情况下 若 outDir 在 root 目录下， 则 Vite 会在构建时清空该目录。
    emptyOutDir: true,

    // 启用 / 禁用 brotli 压缩大小报告
    brotliSize: false,

    // chunk 大小警告的限制
    chunkSizeWarningLimit: 500
  }
});
