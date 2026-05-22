import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'
import type { TProgressCircleColor, TProgressCircleSize } from './constants'

/**
 * ProgressCircle context — the shared render state HeroUI's `ProgressCircle`
 * drives across its compound parts (`Track`, `TrackCircle`, `FillCircle`).
 * HeroUI uses React Aria's `ProgressBar` render state (`percentage` /
 * `isIndeterminate`); reka-ui's `ProgressRoot` backs the a11y, and the geometry
 * math is shared here via provide/inject.
 */
export type TProgressCircleContext = {
  /** Clamped fill ratio, 0–100. */
  percentage: ComputedRef<number>
  /** Whether the circle is indeterminate (no `value` — shows a spinning arc). */
  isIndeterminate: ComputedRef<boolean>
  /** Size variant. */
  size: ComputedRef<TProgressCircleSize>
  /** Colour variant. */
  color: ComputedRef<TProgressCircleColor>
}

export const PROGRESS_CIRCLE_INJECTION_KEY: InjectionKey<TProgressCircleContext> =
  Symbol('HeroProgressCircle')

/** Provide the ProgressCircle context to descendant compound parts. */
export function provideProgressCircleContext (ctx: TProgressCircleContext): void {
  provide(PROGRESS_CIRCLE_INJECTION_KEY, ctx)
}

/** Consume the ProgressCircle context. Throws when used outside a `<ProgressCircle>`. */
export function useProgressCircleContext (): TProgressCircleContext {
  const ctx = inject(PROGRESS_CIRCLE_INJECTION_KEY, null)
  if (!ctx) {
    throw new Error('ProgressCircle compound parts must be used within a <ProgressCircle>.')
  }
  return ctx
}
