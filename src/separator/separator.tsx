import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Separator — HeroUI-Vue primitive over reka-ui `Separator`.
 *
 * Faithful port of `shadcn/separator`. HeroUI `separator.css`: a hairline
 * divider (`shrink-0`, `h-px`/`w-px`) keyed to orientation. Tokens adapted to
 * the repo (`bg-border`). Behaviour is identical to the shadcn source — only
 * the authoring syntax changed.
 */
export const Separator = defineComponent({
  name: 'SeparatorRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<SeparatorProps['orientation']>, default: 'horizontal' },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: true }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaSeparator
        {...attrs}
        orientation={props.orientation}
        decorative={props.decorative}
        class={cn(
          'shrink-0 bg-border',
          props.orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
          props.class
        )}
      />
    )
  }
})

export default Separator
