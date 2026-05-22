import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'

type TSeparatorVariant = 'default' | 'secondary' | 'tertiary'

/**
 * Separator — HeroUI-Vue primitive over reka-ui `Separator`.
 *
 * Emits HeroUI v3 BEM class names from `separator.css`:
 *   - base: `separator`
 *   - orientation: `separator--horizontal` / `separator--vertical`
 *   - variant: `separator--default` / `separator--secondary` / `separator--tertiary`
 */
export const Separator = defineComponent({
  name: 'SeparatorRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<SeparatorProps['orientation']>, default: 'horizontal' },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: true },
    variant: { type: String as PropType<TSeparatorVariant>, default: 'default' }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaSeparator
        {...attrs}
        orientation={props.orientation}
        decorative={props.decorative}
        class={cn(
          'separator',
          `separator--${props.orientation}`,
          `separator--${props.variant}`,
          props.class
        )}
      />
    )
  }
})

export default Separator
