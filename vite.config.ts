import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Components({
    resolvers: [VantResolver()],
  }), createStyleImportPlugin({
    include: ['**/*.ts', '**/*.vue'],
    libs: [
      {
        libraryName: 'vexip-ui',
        esModule: true,
        base: 'vexip-ui/css/preset.css',
        resolveStyle: name => `vexip-ui/css/${name}.css`
      }
    ]
    // resolves: [{
    //   libraryName: 'vant',
    //   esModule: true,
    //   resolveStyle: name => `vexip-ui/css/${name}.css`
    // }]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
