import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
// import { vueI18nPlugin } from './CustomBlockPlugin'

export default defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
      '@': __dirname
    }
  },
  plugins: [
    vuePlugin({
      reactivityTransform: true
    }),
    splitVendorChunkPlugin(),
    vuetify(),
    // vueI18nPlugin
  ],
  build: {
    // Brotli unsupported in StackBlitz
    brotliSize: false, 
    // to make tests faster
    minify: false,
    rollupOptions: {
      output: {
        // Test splitVendorChunkPlugin composition
        manualChunks(id) {
          if (id.includes('src-import')) {
            return 'src-import'
          }
        }
      }
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})