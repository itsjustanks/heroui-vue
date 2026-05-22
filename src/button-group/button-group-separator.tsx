import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * ButtonGroupSeparator — divider between grouped buttons.
 * HeroUI BEM: `button-group__separator`. Positioned absolutely by the CSS;
 * renders as a visual divider line.
 */
export const ButtonGroupSeparator = defineComponent({
  name: 'ButtonGroupSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <span
        {...attrs}
        aria-hidden="true"
        class={cn('button-group__separator', props.class)}
      />
    )
  }
})

export default ButtonGroupSeparator
