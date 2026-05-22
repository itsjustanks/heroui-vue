import { computed, defineComponent, inject, provide, type ComputedRef, type HTMLAttributes, type InjectionKey, type PropType, type Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { formatColor, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

/** Picker context — Items read the selection + select fn; size/variant inherit. */
type TSwatchPickerInternal = {
  selected: ComputedRef<string | null>
  select: (hex: string) => void
  size: ComputedRef<TSwatchSize>
  variant: ComputedRef<'circle' | 'square'>
}
type TSwatchSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const PICKER_KEY: InjectionKey<TSwatchPickerInternal> = Symbol('HeroColorSwatchPicker')
const usePicker = (): TSwatchPickerInternal | null => inject(PICKER_KEY, null)

/** Item context — the swatch part reads its own color/selected state. */
type TSwatchItemInternal = {
  color: ComputedRef<string>
  isSelected: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
}
const ITEM_KEY: InjectionKey<TSwatchItemInternal> = Symbol('HeroColorSwatchItem')
const useItem = (): TSwatchItemInternal | null => inject(ITEM_KEY, null)

/** Size scale — mirrors HeroUI `color-swatch-picker.css`. */
const ITEM_SIZE: Record<TSwatchSize, string> = {
  xs: 'size-4',
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-9',
  xl: 'size-10'
}

/** ColorSwatchPicker.Swatch — the colored fill of an item. */
const ColorSwatchPickerSwatch = defineComponent({
  name: 'ColorSwatchPickerSwatch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const item = useItem()
    return () => (
      <span
        {...attrs}
        data-slot="swatch"
        style={{ background: item?.color.value }}
        class={cn('absolute inset-0 rounded-[inherit]', props.class)}
      />
    )
  }
})

/** ColorSwatchPicker.Indicator — the selected-state checkmark/icon. */
const ColorSwatchPickerIndicator = defineComponent({
  name: 'ColorSwatchPickerIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const item = useItem()
    return () => {
      if (!item?.isSelected.value) return null
      return (
        <span
          {...attrs}
          data-slot="indicator"
          class={cn(
            'pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-white',
            '[filter:drop-shadow(0_1px_1px_rgba(0,0,0,0.45))]',
            props.class
          )}
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

/** ColorSwatchPicker.Item — a single selectable preset swatch. */
const ColorSwatchPickerItem = defineComponent({
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

    const hex = computed(() => formatColor(parseColor(props.color), 'hex'))
    const isSelected = computed(() => picker?.selected.value === hex.value)

    provide(ITEM_KEY, {
      color: hex,
      isSelected,
      isDisabled: computed(() => props.isDisabled)
    })

    return () => (
      <button
        {...attrs}
        type="button"
        aria-label={hex.value}
        aria-pressed={isSelected.value}
        disabled={props.isDisabled}
        data-slot="item"
        data-selected={isSelected.value || undefined}
        data-disabled={props.isDisabled || undefined}
        onClick={() => { if (!props.isDisabled) picker?.select(hex.value) }}
        class={cn(
          'relative shrink-0 overflow-hidden outline-none transition-transform',
          picker?.variant.value === 'square' ? 'rounded-md' : 'rounded-full',
          ITEM_SIZE[picker?.size.value ?? 'md'],
          'border border-border/60',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          !props.isDisabled && !isSelected.value && 'hover:scale-110',
          isSelected.value && 'ring-2 ring-ring ring-offset-2 ring-offset-background',
          props.isDisabled && 'cursor-not-allowed opacity-40',
          props.class
        )}
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
 * ColorSwatchPicker — a palette of preset color swatches. Faithful HeroUI v3
 * port (`color-swatch-picker.css`): grid/stack layouts, circle/square variants,
 * five sizes. Standalone it owns its own selection (`v-model` / `defaultValue`);
 * nested in a `ColorPicker` it drives the picker context instead.
 *
 * Exposes `ColorSwatchPicker.Item`, `.Swatch`, `.Indicator`.
 */
export const ColorSwatchPicker = defineComponent({
  name: 'ColorSwatchPicker',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Controlled selected color. */
    modelValue: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    /** Uncontrolled initial selected color. */
    defaultValue: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    size: { type: String as PropType<TSwatchSize>, default: 'md' },
    variant: { type: String as PropType<'circle' | 'square'>, default: 'circle' },
    layout: { type: String as PropType<'grid' | 'stack'>, default: 'grid' }
  },
  emits: {
    'update:modelValue': (_hex: string) => true
  },
  setup (props, { attrs, emit, slots }) {
    const ctx = useColorPickerContext()

    // Standalone selection state (used only when not inside a ColorPicker).
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

    provide(PICKER_KEY, {
      selected,
      select,
      size: computed(() => props.size),
      variant: computed(() => props.variant)
    })

    return () => (
      <div
        {...attrs}
        role="listbox"
        aria-label={(attrs['aria-label'] as string | undefined) ?? 'Color swatches'}
        data-layout={props.layout}
        data-variant={props.variant}
        data-size={props.size}
        class={cn(
          'flex flex-wrap gap-1.5',
          props.layout === 'stack' && 'flex-col flex-nowrap',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export { ColorSwatchPickerItem, ColorSwatchPickerSwatch, ColorSwatchPickerIndicator }
export default ColorSwatchPicker
