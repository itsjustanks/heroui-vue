import { defineComponent } from 'vue'
import { TooltipRoot } from 'reka-ui'

/** Tooltip — root. HeroUI-Vue primitive over reka-ui `TooltipRoot`. */
export const Tooltip = defineComponent({
  name: 'Tooltip',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <TooltipRoot {...attrs}>{slots.default?.()}</TooltipRoot>
  }
})

export default Tooltip
