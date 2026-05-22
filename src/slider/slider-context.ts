import type { ComputedRef, InjectionKey } from 'vue'
import type { sliderVariants } from '@heroui/styles'

/** The `sliderVariants()` slot map — one class-name function per Slider part. */
export type SliderSlots = ReturnType<typeof sliderVariants>

export interface SliderContext {
  /** Reactive slot map — recomputed on variant changes (currently no variants in the spec). */
  slots: ComputedRef<SliderSlots>
  /** Current slider value(s) — drives `SliderFill` width calculations. */
  modelValue: ComputedRef<number[]>
  /** Minimum bound of the range. */
  min: ComputedRef<number>
  /** Maximum bound of the range. */
  max: ComputedRef<number>
  /** Orientation of the slider. */
  orientation: ComputedRef<'horizontal' | 'vertical'>
  /** Whether the slider is disabled. */
  isDisabled: ComputedRef<boolean>
}

/** Provided by `SliderRoot`, consumed by every compound part. */
export const SLIDER_CONTEXT: InjectionKey<SliderContext> = Symbol('heroui-vue-slider')
