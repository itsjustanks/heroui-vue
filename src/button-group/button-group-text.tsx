import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * ButtonGroupText — a text/label slot rendered inside a ButtonGroup.
 * Not part of HeroUI's button-group BEM spec (shadcn-specific pattern).
 * Rendered as a non-interactive text node within the group.
 */
export const ButtonGroupText = defineComponent({
  name: 'ButtonGroupText',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...(attrs as Record<string, any>)}
        class={cn('inline-flex items-center px-3 text-sm', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default ButtonGroupText
