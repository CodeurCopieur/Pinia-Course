import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'
import {presetAttributify, presetUno} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCss([{ presets: [presetUno(), presetAttributify()] }])],
})
