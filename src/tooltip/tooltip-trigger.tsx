import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/** TooltipTrigger — the element the tooltip is anchored to. */
export const TooltipTrigger = defineComponent({
  name: 'TooltipTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTooltipTrigger
        {...attrs}
        data-slot="tooltip-trigger"
        class={cn('tooltip__trigger', props.class)}
      >
        {slots.default?.()}
      </RekaTooltipTrigger>
    )
  }
})

export default TooltipTrigger
