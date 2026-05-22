import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

/**
 * heroui-vue — library build.
 *
 * Vue/JSX components compiled to ESM; Vue + the reka-ui stack stay external so
 * the consuming app dedupes them. CSS is emitted alongside as `heroui-vue.css`.
 */
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'HeroUIVue',
      formats: ['es'],
      fileName: 'heroui-vue'
    },
    rollupOptions: {
      external: [
        'vue',
        'reka-ui',
        'lucide-vue-next',
        'class-variance-authority',
        '@vueuse/core',
        'vue-sonner',
        'clsx',
        'tailwind-merge'
      ],
      output: { exports: 'named' }
    }
  }
})
