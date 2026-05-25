/**
 * Surface — faithful Vue port of HeroUI v3 `Surface`.
 *
 * @see https://www.heroui.com/docs/react/components/surface
 */
import { SurfaceRoot } from './surface'

export const Surface = Object.assign(SurfaceRoot, {
  Root: SurfaceRoot
})

export { SurfaceRoot }
export { SURFACE_CONTEXT } from './surface-context'
import { SURFACE_CONTEXT } from './surface-context'
import type { SurfaceContext as _SurfaceContext } from './surface-context'
/** React-style value alias for `SURFACE_CONTEXT`; type with the same name merges into this binding. */
export const SurfaceContext = SURFACE_CONTEXT
export type SurfaceContext = _SurfaceContext
export { surfaceVariants } from '@heroui/styles'
export type { SurfaceVariants } from '@heroui/styles'
