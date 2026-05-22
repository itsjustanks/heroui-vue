import { computed, defineComponent, inject, provide, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType, type Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { colorSwatchPickerVariants, type ColorSwatchPickerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { formatColor, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

/** Picker context — Items read the selection + select fn; size/variant inherit. */
type TSwatchPickerInternal = {
  selected: ComputedRef<string | null>
  select: (hex: string) => void
  size: ComputedRef<ColorSwatchPickerVariants['size']>
  variant: ComputedRef<ColorSwatchPickerVariants['variant']>
  slots: ComputedRef<ReturnType<typeof colorSwatchPickerVariants>>
}
const PICKER_KEY: InjectionKey<TSwatchPickerInternal> = Symbol('heroui-vue-color-swatch-picker')
const usePicker = (): TSwatchPickerInternal | null => inject(PICKER_KEY, null)

/** Item context — Swatch and Indicator read their own color/selected state. */
type TSwatchItemInternal = {
  color: ComputedRef<string>
  isSelected: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  slots: ComputedRef<ReturnType<typeof colorSwatchPickerVariants>>
}
const ITEM_KEY: InjectionKey<TSwatchItemInternal> = Symbol('heroui-vue-color-swatch-picker-item')
const useItem = (): TSwatchItemInternal | null => inject(ITEM_KEY, null)

/**
 * ColorSwatchPickerSwatch — the colored fill of a picker item.
 * HeroUI v3 `ColorSwatchPicker.Swatch` (`data-slot="color-swatch-picker-swatch"`).
 */
export const ColorSwatchPickerSwatch = defineComponent({
  name: 'ColorSwatchPickerSwatch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const item = useItem()
    const fallback = colorSwatchPickerVariants()
    return () => {
      const slots = item?.slots.value ?? fallback
      return (
        <span
          {...attrs}
          data-slot="color-swatch-picker-swatch"
          style={{ background: item?.color.value }}
          class={cn(slots.swatch(), props.class)}
        />
      )
    }
  }
})

/**
 * ColorSwatchPickerIndicator — the selected-state checkmark icon.
 * HeroUI v3 `ColorSwatchPicker.Indicator` (`data-slot="color-swatch-picker-indicator"`).
 */
export const ColorSwatchPickerIndicator = defineComponent({
  name: 'ColorSwatchPickerIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const item = useItem()
    const fallback = colorSwatchPickerVariants()
    return () => {
      if (!item?.isSelected.value) return null
      const styles = item?.slots.value ?? fallback
      return (
        <span
          {...attrs}
          data-slot="color-swatch-picker-indicator"
          class={cn(styles.indicator(), props.class)}
        >
          {slots.default
            ? slots.default()
            : (
              <svg viewBox="0 0 16 16" class="size-3.5" aria-hidden="true">
                <path d="M13 4.5 6.5 11 3 7.5" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
        </span>
      )
    }
  }
})

/**
 * ColorSwatchPickerItem — a single selectable preset swatch.
 * HeroUI v3 `ColorSwatchPicker.Item` (`data-slot="color-swatch-picker-item"`).
 */
export const ColorSwatchPickerItem = defineComponent({
  name: 'ColorSwatchPickerItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The color of this preset. Required. */
    color: { type: [String, Object] as PropType<string | TColorValue>, required: true },
    isDisabled: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const picker = usePicker()
    const fallback = colorSwatchPickerVariants()

    const hex = computed(() => formatColor(parseColor(props.color), 'hex'))
    const isSelected = computed(() => picker?.selected.value === hex.value)
    const itemSlots = computed(() => picker?.slots.value ?? fallback)

    provide(ITEM_KEY, {
      color: hex,
      isSelected,
      isDisabled: computed(() => props.isDisabled),
      slots: itemSlots
    })

    return () => (
      <button
        {...attrs}
        type="button"
        aria-label={hex.value}
        aria-pressed={isSelected.value}
        disabled={props.isDisabled}
        data-slot="color-swatch-picker-item"
        data-selected={isSelected.value || undefined}
        data-disabled={props.isDisabled || undefined}
        onClick={() => { if (!props.isDisabled) picker?.select(hex.value) }}
        class={cn(itemSlots.value.item(), props.class)}
      >
        {slots.default
          ? slots.default()
          : (
            <>
              <ColorSwatchPickerSwatch />
              <ColorSwatchPickerIndicator />
            </>
          )}
      </button>
    )
  }
})

/**
 * ColorSwatchPickerRoot — a palette of preset color swatches. HeroUI v3
 * `ColorSwatchPicker.Root` (`data-slot="color-swatch-picker"`). Computes
 * `colorSwatchPickerVariants` and provides the slot map + selection state.
 *
 * Standalone it owns its own selection (`modelValue` / `defaultValue`); nested
 * in a `ColorPicker` it drives the picker context instead.
 */
export const ColorSwatchPickerRoot = defineComponent({
  name: 'ColorSwatchPicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Controlled selected color. */
    modelValue: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    /** Uncontrolled initial selected color. */
    defaultValue: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    size: { type: String as PropType<ColorSwatchPickerVariants['size']>, default: 'md' },
    variant: { type: String as PropType<ColorSwatchPickerVariants['variant']>, default: 'circle' },
    layout: { type: String as PropType<ColorSwatchPickerVariants['layout']>, default: 'grid' }
  },
  emits: {
    'update:modelValue': (_hex: string) => true
  },
  setup (props, { attrs, emit, slots }) {
    const ctx = useColorPickerContext()

    const own: Ref<string | TColorValue | undefined> = useVModel(props, 'modelValue', emit, {
      passive: true,
      defaultValue: props.defaultValue
    })

    const selected = computed<string | null>(() => {
      if (ctx) return formatColor(ctx.color.value, 'hex')
      return own.value != null ? formatColor(parseColor(own.value), 'hex') : null
    })

    const select = (hex: string): void => {
      if (ctx) {
        ctx.setColor(parseColor(hex))
        return
      }
      own.value = hex
    }

    const pickerSlots = computed(() => colorSwatchPickerVariants({
      size: props.size,
      variant: props.variant,
      layout: props.layout
    }))

    provide(PICKER_KEY, {
      selected,
      select,
      size: computed(() => props.size),
      variant: computed(() => props.variant),
      slots: pickerSlots
    })

    return () => (
      <div
        {...attrs}
        role="listbox"
        aria-label={(attrs['aria-label'] as string | undefined) ?? 'Color swatches'}
        data-layout={props.layout}
        data-variant={props.variant}
        data-size={props.size}
        data-slot="color-swatch-picker"
        class={cn(pickerSlots.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ColorSwatchPickerRoot
