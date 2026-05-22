import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'
import type { colorPickerVariants } from '@heroui/styles'
import type { TColorValue } from './color-utils'

/** The `colorPickerVariants()` slot map — one class-name function per ColorPicker part. */
export type ColorPickerSlots = ReturnType<typeof colorPickerVariants>

export interface ColorPickerStyleContext {
  /** Reactive slot map — provides BEM class functions to compound parts. */
  slots: ComputedRef<ColorPickerSlots>
}

/**
 * ColorPicker context — shared color state + BEM slot map, synchronised across
 * compound parts (`ColorArea`, `ColorSlider`, `ColorSwatch`, `ColorField`,
 * `ColorSwatchPicker`). HeroUI uses React Aria's ColorPicker context; this is
 * the Vue provide/inject analogue.
 */
export type TColorPickerContext = ColorPickerStyleContext & {
  /** The current color (HSV + alpha working model). */
  color: ComputedRef<TColorValue>
  /** Replace the whole color value. */
  setColor: (next: TColorValue) => void
  /** Patch one or more channels of the color value. */
  patchColor: (patch: Partial<TColorValue>) => void
}

export const COLOR_PICKER_CONTEXT: InjectionKey<TColorPickerContext> =
  Symbol('heroui-vue-color-picker')

/** Provide the ColorPicker context to descendant compound parts. */
export function provideColorPickerContext (ctx: TColorPickerContext): void {
  provide(COLOR_PICKER_CONTEXT, ctx)
}

/**
 * Consume the ColorPicker context. Returns `null` when a part is used
 * stand-alone (e.g. a bare `ColorSwatch` with its own `color` prop).
 */
export function useColorPickerContext (): TColorPickerContext | null {
  return inject(COLOR_PICKER_CONTEXT, null)
}
