import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'
import type { TMeterColor, TMeterSize } from './variants'

/**
 * Meter context — the shared state HeroUI's `Meter` drives across its compound
 * parts (`Output`, `Track`, `Fill`). HeroUI uses React Aria's `Meter` render
 * state (`percentage` / `valueText`); reka-ui has no `Meter` primitive, so the
 * value math lives in the root `setup()` and is shared via provide/inject.
 */
export type TMeterContext = {
  /** Clamped fill ratio, 0–100. */
  percentage: ComputedRef<number>
  /** Formatted value text (defaults to a percent string). */
  valueText: ComputedRef<string>
  /** Size variant. */
  size: ComputedRef<TMeterSize>
  /** Colour variant. */
  color: ComputedRef<TMeterColor>
}

export const METER_INJECTION_KEY: InjectionKey<TMeterContext> = Symbol('HeroMeter')

/** Provide the Meter context to descendant compound parts. */
export function provideMeterContext (ctx: TMeterContext): void {
  provide(METER_INJECTION_KEY, ctx)
}

/** Consume the Meter context. Throws when used outside a `<Meter>`. */
export function useMeterContext (): TMeterContext {
  const ctx = inject(METER_INJECTION_KEY, null)
  if (!ctx) {
    throw new Error('Meter compound parts must be used within a <Meter>.')
  }
  return ctx
}
