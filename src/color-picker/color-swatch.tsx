import { computed, defineComponent, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { colorSwatchVariants, type ColorSwatchVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { formatColor, parseColor, type TColorValue } from './color-utils'
import { useColorPickerContext } from './color-picker-context'

/** Render-props handed to the `style` function form. */
export type TColorSwatchRenderProps = {
  color: {
    value: TColorValue
    toString: (f?: 'hex' | 'rgb' | 'hsl' | 'css') => string
  }
}

/**
 * ColorSwatchRoot — a visual preview of a color value. HeroUI v3 `ColorSwatch.Root`
 * (`data-slot="color-swatch"`). Computes `colorSwatchVariants` for shape + size BEM
 * classes. When nested in a `ColorPicker` it previews the picker's live color;
 * standalone it shows its own `color` prop.
 */
export const ColorSwatchRoot = defineComponent({
  name: 'ColorSwatch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Color value to display. Falls back to ColorPicker context when omitted. */
    color: { type: [String, Object] as PropType<string | TColorValue>, default: undefined },
    /** Accessible name for the color. */
    colorName: { type: String, default: undefined },
    shape: { type: String as PropType<ColorSwatchVariants['shape']>, default: 'circle' },
    size: { type: String as PropType<ColorSwatchVariants['size']>, default: 'md' },
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

    return () => {
      const styles = colorSwatchVariants({ shape: props.shape, size: props.size })
      return (
        <div
          {...attrs}
          role="img"
          aria-label={props.colorName ?? (attrs['aria-label'] as string | undefined) ?? cssColor.value}
          data-shape={props.shape}
          data-size={props.size}
          data-slot="color-swatch"
          style={resolvedStyle.value}
          class={cn(styles, props.class)}
        />
      )
    }
  }
})

export default ColorSwatchRoot
