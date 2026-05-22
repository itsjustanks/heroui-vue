import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'
import type { TColorValue } from './color-utils'

/**
 * ColorPicker context — the shared color state HeroUI's ColorPicker synchronises
 * across its compound parts (`ColorArea`, `ColorSlider`, `ColorSwatch`,
 * `ColorField`, `ColorSwatchPicker`). HeroUI uses React Aria's ColorPicker
 * context; this is the reka-ui/Vue analogue — a provide/inject channel.
 */
export type TColorPickerContext = {
  /** The current color (HSV + alpha working model). */
  color: ComputedRef<TColorValue>
  /** Replace the whole color value. */
  setColor: (next: TColorValue) => void
  /** Patch one or more channels of the color value. */
  patchColor: (patch: Partial<TColorValue>) => void
}

export const COLOR_PICKER_INJECTION_KEY: InjectionKey<TColorPickerContext> =
  Symbol('HeroColorPicker')

/** Provide the ColorPicker context to descendant compound parts. */
export function provideColorPickerContext (ctx: TColorPickerContext): void {
  provide(COLOR_PICKER_INJECTION_KEY, ctx)
}

/**
 * Consume the ColorPicker context. Returns `null` when a part is used
 * stand-alone (e.g. a bare `ColorSwatch` with its own `color` prop).
 */
export function useColorPickerContext (): TColorPickerContext | null {
  return inject(COLOR_PICKER_INJECTION_KEY, null)
}
