import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import type { SeparatorProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { Separator } from '@/separator'

/**
 * ButtonGroupSeparator — divider between grouped buttons. Faithful port of
 * `shadcn/button-group/ButtonGroupSeparator`: defaults `orientation` to
 * `vertical` and stretches to the group's height.
 */
export const ButtonGroupSeparator = defineComponent({
  name: 'ButtonGroupSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    orientation: { type: String as PropType<SeparatorProps['orientation']>, default: 'vertical' },
    decorative: { type: Boolean as PropType<SeparatorProps['decorative']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <Separator
        {...attrs}
        data-slot="button-group-separator"
        orientation={props.orientation}
        decorative={props.decorative}
        class={cn(
          'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
          props.class
        )}
      >
        {slots.default?.()}
      </Separator>
    )
  }
})

export default ButtonGroupSeparator
