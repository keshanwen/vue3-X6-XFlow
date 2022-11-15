import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },

//   server: {
//     port: 1234,
//     host: '0.0.0.0',
//   }
// })

export default defineConfig({ 
  define: { 'process.env': {} }, 
  plugins: [vue()], 
  resolve: { 
    alias: { 
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    } 
  },
  server: {
    port: 1234,
    host: '0.0.0.0',
  }
})
