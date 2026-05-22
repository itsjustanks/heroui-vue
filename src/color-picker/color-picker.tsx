import { computed, defineComponent, inject, ref, watch, type HTMLAttributes, type PropType } from 'vue'
import { useVModel } from '@vueuse/core'
import { colorPickerVariants, type ColorPickerVariants } from '@heroui/styles'
import { Popover, PopoverContent } from '@/popover'
import { cn } from '@/lib/utils'
import { normalizeColor, parseColor, type TColorValue } from './color-utils'
import { provideColorPickerContext, COLOR_PICKER_CONTEXT } from './color-picker-context'

/**
 * ColorPickerTrigger — the element that opens the picker popover. HeroUI v3
 * `ColorPicker.Trigger` (`data-slot="color-picker-trigger"`).
 *
 * reka-ui (2.8) ships no color primitive; the trigger is a plain button that
 * lets the parent `<Popover>` route focus. Pass children (e.g. a `ColorSwatch`).
 */
export const ColorPickerTrigger = defineComponent({
  name: 'ColorPickerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLOR_PICKER_CONTEXT, null)
    return () => {
      const styles = ctx?.slots.value ?? colorPickerVariants()
      return (
        <button
          {...attrs}
          type="button"
          data-slot="color-picker-trigger"
          class={cn(styles.trigger(), props.class)}
        >
          {slots.default?.()}
        </button>
      )
    }
  }
})

/**
 * ColorPickerPopover — the floating panel holding the color controls. HeroUI v3
 * `ColorPicker.Popover` (`data-slot="color-picker-popover"`). Wraps the repo's
 * `PopoverContent` so the overlay shim (`vHerouiState`) is applied automatically.
 */
export const ColorPickerPopover = defineComponent({
  name: 'ColorPickerPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'start' },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COLOR_PICKER_CONTEXT, null)
    return () => {
      const styles = ctx?.slots.value ?? colorPickerVariants()
      return (
        <PopoverContent
          {...attrs}
          align={props.align}
          sideOffset={props.sideOffset}
          data-slot="color-picker-popover"
          class={cn(styles.popover(), props.class)}
        >
          {slots.default?.()}
        </PopoverContent>
      )
    }
  }
})

/**
 * ColorPickerRoot — root context provider. Faithful Vue port of HeroUI v3
 * `ColorPickerRoot`. Computes `colorPickerVariants`, provides the slot map and
 * the live color state to all compound parts. Wraps `Popover` since reka-ui
 * (2.8) ships no color primitive.
 *
 * `value` / `defaultValue` accept any CSS color string or a `TColorValue`.
 * `onChange` (`update:value` emit) fires with the normalised `TColorValue`.
 */
export const ColorPickerRoot = defineComponent({
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
    const styles = computed(() => colorPickerVariants())

    const valueModel = useVModel(props, 'value', emit, {
      passive: true,
      defaultValue: props.defaultValue
    })

    const internal = ref<TColorValue>(parseColor(valueModel.value ?? props.defaultValue))

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
      slots: styles,
      color: computed(() => internal.value),
      setColor,
      patchColor
    })

    return () => (
      <Popover>
        <div {...attrs} data-slot="color-picker" class={cn(styles.value.base(), props.class)}>
          {slots.default?.()}
        </div>
      </Popover>
    )
  }
})

export default ColorPickerRoot
