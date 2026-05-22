import { defineComponent } from 'vue'
import { TooltipProvider as RekaTooltipProvider } from 'reka-ui'

/** TooltipProvider — shares delay/skip timing across a tooltip group. */
export const TooltipProvider = defineComponent({
  name: 'TooltipProvider',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaTooltipProvider {...attrs}>{slots.default?.()}</RekaTooltipProvider>
  }
})

export default TooltipProvider
