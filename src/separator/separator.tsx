import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { separatorVariants, type SeparatorVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * SeparatorRoot — faithful Vue port of HeroUI v3 `SeparatorRoot`.
 *
 * Wraps reka-ui `Separator` and applies BEM classes from `separatorVariants`
 * in `@heroui/styles`. Flat style (no slots) — `separatorVariants({...})`
 * returns a class string directly.
 */
export const SeparatorRoot = defineComponent({
  name: 'SeparatorRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<SeparatorProps['orientation']>, default: 'horizontal' },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: true },
    /** Visual variant — `separator--{variant}`. @default 'default' */
    variant: { type: String as PropType<SeparatorVariants['variant']>, default: 'default' }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaSeparator
        {...attrs}
        orientation={props.orientation}
        decorative={props.decorative}
        data-slot="separator"
        data-orientation={props.orientation}
        class={cn(
          separatorVariants({ orientation: props.orientation as SeparatorVariants['orientation'], variant: props.variant }),
          props.class
        )}
      />
    )
  }
})

export default SeparatorRoot
