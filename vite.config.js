import path from 'path'
import vuePlugin from '@vitejs/plugin-vue'
// import vuetify from '@vuetify/vite-plugin'
import vuetify from 'vite-plugin-vuetify'
import eslint from 'vite-plugin-eslint'

// Utilities
import { defineConfig, splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [
    vuePlugin({
      reactivityTransform: true,
    }),
    splitVendorChunkPlugin(),
    vuetify({
      autoImport: true,
    }),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    server: {
      port: 3000,
    },
    build: {
      // Brotli unsupported in StackBlitz
      brotliSize: false,
      // to make tests faster
      minify: false,
      rollupOptions: {
        output: {
          // Test splitVendorChunkPlugin composition
          manualChunks(id) {
            if (id.includes('src-import'))
              return 'src-import'
          },
        },
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
  },
})
