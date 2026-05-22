import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Collapsible — root of the HeroUI-Vue collapsible (primitive library).
 *
 * HeroUI v3 BEM: `disclosure` (maps collapsible → disclosure). Wraps reka-ui
 * `CollapsibleRoot` and emits the `disclosure` BEM class.
 */
export const Collapsible = defineComponent({
  name: 'Collapsible',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <CollapsibleRoot {...attrs} class={cn('disclosure', props.class)}>
        {{
          default: ({ open }: { open: boolean }) => slots.default?.({ open })
        }}
      </CollapsibleRoot>
    )
  }
})

export default Collapsible
