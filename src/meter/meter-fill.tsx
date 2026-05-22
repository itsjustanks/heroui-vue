import { defineComponent, type CSSProperties, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'
import { useMeterContext } from './meter-context'
import { meterFillVariants } from './variants'

/**
 * MeterFill — the meter's filled bar. HeroUI v3 `Meter.Fill`.
 *
 * Adapts HeroUI's `meter__fill`: an absolutely-positioned bar whose `width` is
 * the context `percentage`, with a smooth `width` transition. Colour + radius
 * follow the `color` / `size` variants (read from context).
 */
export const MeterFill = defineComponent({
  name: 'MeterFill',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Extra inline styles merged onto the fill (mirrors HeroUI's `style` prop). */
    style: { type: Object as PropType<CSSProperties>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = useMeterContext()
    return () => (
      <div
        {...attrs}
        data-slot="meter-fill"
        style={{ ...props.style, width: `${ctx.percentage.value}%` }}
        class={cn(
          meterFillVariants({ size: ctx.size.value, color: ctx.color.value }),
          props.class
        )}
      />
    )
  }
})

export default MeterFill
