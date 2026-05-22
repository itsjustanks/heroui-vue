import { defineComponent } from 'vue'
import { TooltipTrigger as RekaTooltipTrigger } from 'reka-ui'

/** TooltipTrigger — the element the tooltip is anchored to. */
export const TooltipTrigger = defineComponent({
  name: 'TooltipTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaTooltipTrigger {...attrs}>{slots.default?.()}</RekaTooltipTrigger>
  }
})

export default TooltipTrigger
