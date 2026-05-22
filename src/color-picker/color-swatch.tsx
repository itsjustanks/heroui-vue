import { computed, defineComponent, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { formatColor, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

/** Swatch size scale — mirrors HeroUI `color-swatch.css`. */
const SWATCH_SIZE = {
  xs: 'size-4',
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-9',
  xl: 'size-10'
} as const

/** Swatch shape — `color-swatch--circle` (default) / `--square`. */
const SWATCH_SHAPE = {
  circle: 'rounded-full',
  square: 'rounded-md'
} as const

/** Render-props handed to the `style` function form. */
export type TColorSwatchRenderProps = {
  color: {
    value: TColorValue
    toString: (f?: 'hex' | 'rgb' | 'hsl' | 'css') => string
  }
}

/**
 * ColorSwatch — a visual preview of a color value. Faithful HeroUI v3 port of
 * `color-swatch.css`: checkered transparency backdrop, circle/square shapes,
 * five sizes. When nested in a `ColorPicker` it previews the picker's live
 * color; standalone, it shows its own `color` prop.
 *
 * Tokens adapted to the repo (`border-border`, `ring-ring`).
 */
export const ColorSwatch = defineComponent({
  name: 'ColorSwatch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Color value to display. Falls back to ColorPicker context when omitted. */
    color: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    /** Accessible name for the color. */
    colorName: { type: String, default: undefined },
    shape: { type: String as PropType<keyof typeof SWATCH_SHAPE>, default: 'circle' },
    size: { type: String as PropType<keyof typeof SWATCH_SIZE>, default: 'md' },
    /** Inline styles, or a render-prop function with access to the color. */
    style: {
      type: [Object, Function] as PropType<CSSProperties | ((p: TColorSwatchRenderProps) => CSSProperties)>,
      default: undefined
    }
  },
  setup (props, { attrs }) {
    const ctx = useColorPickerContext()

    const value = computed<TColorValue>(() => {
      if (props.color != null) return parseColor(props.color)
      if (ctx) return ctx.color.value
      return { h: 0, s: 0, v: 0, a: 1 }
    })

    const cssColor = computed(() => formatColor(value.value, 'css'))

    const resolvedStyle = computed<CSSProperties>(() => {
      const swatchVar = { '--swatch-color': cssColor.value } as CSSProperties
      if (typeof props.style === 'function') {
        const renderProps: TColorSwatchRenderProps = {
          color: {
            value: value.value,
            toString: (f) => formatColor(value.value, f)
          }
        }
        return { ...swatchVar, ...props.style(renderProps) }
      }
      return { ...swatchVar, background: cssColor.value, ...(props.style ?? {}) }
    })

    return () => (
      <div
        {...attrs}
        role="img"
        aria-label={props.colorName ?? (attrs['aria-label'] as string | undefined) ?? cssColor.value}
        data-shape={props.shape}
        data-size={props.size}
        style={resolvedStyle.value}
        class={cn(
          // Checkered transparency backdrop behind the color layer.
          'relative shrink-0 overflow-hidden border border-border/60 bg-[length:8px_8px]',
          'bg-[linear-gradient(45deg,#0000_25%,#80808033_25%_75%,#0000_75%),linear-gradient(45deg,#0000_25%,#80808033_25%_75%,#0000_75%)]',
          'bg-[position:0_0,4px_4px]',
          SWATCH_SIZE[props.size],
          SWATCH_SHAPE[props.shape],
          props.class
        )}
      />
    )
  }
})

export default ColorSwatch
