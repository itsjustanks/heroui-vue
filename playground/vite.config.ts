import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

/**
 * The parity playground renders Vue (`@itsjustanks/heroui-vue`) and React
 * (`@heroui/react`) components side by side. Vue SFCs (`.vue`) go through the
 * Vue plugin; React demos (`.tsx`) through the React plugin — no overlap.
 */
export default defineConfig({
  plugins: [
    vue(),
    react({ include: /\.(jsx|tsx)$/ })
  ]
})
