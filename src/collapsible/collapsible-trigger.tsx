import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { CollapsibleTrigger as RekaCollapsibleTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CollapsibleTrigger — toggles the collapsible open/closed.
 *
 * HeroUI v3 BEM: `disclosure__trigger`. Wraps reka-ui `CollapsibleTrigger`.
 */
export const CollapsibleTrigger = defineComponent({
  name: 'CollapsibleTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaCollapsibleTrigger {...attrs} class={cn('disclosure__trigger', props.class)}>
        {slots.default?.()}
      </RekaCollapsibleTrigger>
    )
  }
})

export default CollapsibleTrigger
