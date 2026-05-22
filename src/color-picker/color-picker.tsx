import { computed, defineComponent, ref, watch, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/popover'
import { normalizeColor, parseColor, type TColorValue } from './color-utils'
import { provideColorPickerContext } from './color-picker-context'

/**
 * ColorPicker.Trigger — the element that opens the picker popover (typically a
 * `ColorSwatch` + `Label`). Composes `popover`'s `PopoverTrigger`, which
 * renders as a `<button>`.
 */
const ColorPickerTrigger = defineComponent({
  name: 'ColorPickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <PopoverTrigger
        {...attrs}
        data-slot="color-picker-trigger"
        class={cn('color-picker__trigger', props.class)}
      >
        {slots.default?.()}
      </PopoverTrigger>
    )
  }
})

/**
 * ColorPicker.Popover — the floating panel holding the color controls. Composes
 * `popover`'s `PopoverContent`.
 */
const ColorPickerPopover = defineComponent({
  name: 'ColorPickerPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <PopoverContent
        {...attrs}
        align={props.align}
        sideOffset={props.sideOffset}
        data-slot="color-picker-popover"
        class={cn('color-picker__popover', props.class)}
      >
        {slots.default?.()}
      </PopoverContent>
    )
  }
})

/**
 * ColorPicker — a composable color picker that synchronises a color value across
 * its compound parts. Faithful HeroUI v3 port: HeroUI's `ColorPicker` is built on
 * React Aria; reka-ui (2.8) ships no color primitive, so the color model lives in
 * `setup()` and the popover composes the `Popover` component.
 *
 * Parts: `ColorPicker.Trigger`, `ColorPicker.Popover`. The picking controls
 * (`ColorArea`, `ColorSlider`, `ColorSwatch`, `ColorField`, `ColorSwatchPicker`)
 * are imported separately and read the shared context.
 *
 * `value` / `defaultValue` accept any CSS color string or a `TColorValue`;
 * `onChange` (`update:value` emit) fires with the normalised `TColorValue`.
 */
export const ColorPicker = defineComponent({
  name: 'ColorPicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Controlled color value (CSS string or TColorValue). */
    value: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    /** Uncontrolled initial color value. */
    defaultValue: { type: [String, Object] as PropType<string | TColorValue>, default: '#0485F7' }
  },
  emits: {
    'update:value': (_color: TColorValue) => true
  },
  setup (props, { attrs, emit, slots }) {
    // Color value — controlled via `value`/`update:value`, else internal.
    const valueModel = useVModel(props, 'value', emit, {
      passive: true,
      defaultValue: props.defaultValue
    })

    // The working model — always a normalised TColorValue.
    const internal = ref<TColorValue>(parseColor(valueModel.value ?? props.defaultValue))

    // Keep the internal model in sync with an external `value`.
    watch(
      () => valueModel.value,
      (next) => {
        if (next == null) return
        const parsed = parseColor(next)
        if (JSON.stringify(parsed) !== JSON.stringify(internal.value)) {
          internal.value = parsed
        }
      }
    )

    const setColor = (next: TColorValue): void => {
      const normalized = normalizeColor(next)
      internal.value = normalized
      valueModel.value = normalized
    }
    const patchColor = (patch: Partial<TColorValue>): void => {
      setColor({ ...internal.value, ...patch })
    }

    provideColorPickerContext({
      color: computed(() => internal.value),
      setColor,
      patchColor
    })

    return () => (
      <Popover>
        <div {...attrs} data-slot="color-picker" class={cn('color-picker', props.class)}>
          {slots.default?.()}
        </div>
      </Popover>
    )
  }
})

export { ColorPickerTrigger, ColorPickerPopover }
export default ColorPicker
