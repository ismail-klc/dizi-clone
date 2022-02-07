import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      strategies: 'injectManifest',
      manifest: {
        name: 'Dizi TV',
        short_name: 'Dizi TV',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
        ],
      },
    }),
  ]
})
