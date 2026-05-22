import type { ComputedRef, InjectionKey } from 'vue'
import type { SurfaceVariants } from '@heroui/styles'

export interface SurfaceContext {
  variant: ComputedRef<SurfaceVariants['variant']>
}

export const SURFACE_CONTEXT: InjectionKey<SurfaceContext> = Symbol('SurfaceContext')
