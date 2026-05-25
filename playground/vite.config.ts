import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import react from '@vitejs/plugin-react'

/**
 * The parity playground renders Vue (heroui-vue) and React (`@heroui/react`)
 * components side by side.
 *
 * - `tailwindcss()` compiles HeroUI's full stylesheet (`@heroui/styles`).
 * - The library is aliased straight to its **source** (`../src`), so editing a
 *   component hot-reloads here instantly — no rebuild step.
 * - `@vitejs/plugin-vue-jsx` handles all Vue TSX (the library source + the Vue
 *   demos); `@vitejs/plugin-react` handles only `src/demos/react/*.tsx`.
 */
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx({ exclude: /\/demos\/react\// }),
    /**
     * React Fast Refresh's scope tracker chokes on the ported HeroUI demos
     * (rolldown error: "exported identifier not declared in Babel's scope
     * tracker") because each demo is a single small component file with
     * hooks and a trailing default export. Disabling Fast Refresh keeps the
     * demos compiling; full-page reload on edit is acceptable for parity work.
     */
    react({ include: /\/demos\/react\/.*\.tsx$/, fastRefresh: false })
  ],
  resolve: {
    alias: {
      '@itsjustanks/heroui-vue': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  }
})
