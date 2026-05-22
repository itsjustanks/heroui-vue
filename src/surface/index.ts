/**
 * Surface — faithful Vue port of HeroUI v3 `Surface`.
 */
import { SurfaceRoot } from './surface'

export const Surface = Object.assign(SurfaceRoot, {
  Root: SurfaceRoot
})

export { SurfaceRoot }
export { SURFACE_CONTEXT, type SurfaceContext } from './surface-context'
export { surfaceVariants } from '@heroui/styles'
export type { SurfaceVariants } from '@heroui/styles'
