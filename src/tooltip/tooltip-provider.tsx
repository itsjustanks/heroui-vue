import { defineComponent, type PropType } from 'vue'
import { TooltipProvider as RekaTooltipProvider } from 'reka-ui'

/** TooltipProvider — shares delay/skip timing across a tooltip group. */
export const TooltipProvider = defineComponent({
  name: 'TooltipProvider',
  inheritAttrs: false,
  props: {
    delay: { type: Number, default: undefined },
    delayDuration: { type: Number, default: undefined },
    skipDelayDuration: { type: Number, default: undefined },
    disableHoverableContent: { type: Boolean as PropType<boolean | undefined>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTooltipProvider
        {...attrs}
        delayDuration={props.delayDuration ?? props.delay}
        skipDelayDuration={props.skipDelayDuration}
        disableHoverableContent={props.disableHoverableContent}
      >
        {slots.default?.()}
      </RekaTooltipProvider>
    )
  }
})

export default TooltipProvider
