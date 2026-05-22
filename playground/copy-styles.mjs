/**
 * Copy HeroUI's pre-compiled stylesheet into public/ so the playground can load
 * it as a plain <link> — no Tailwind/PostCSS build needed. Runs before dev/build.
 */
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const src = join(root, 'node_modules/@heroui/styles/dist/heroui.min.css')
const dest = join(root, 'public/heroui.css')

mkdirSync(dirname(dest), { recursive: true })
copyFileSync(src, dest)
console.log('copy-styles: @heroui/styles -> public/heroui.css')
