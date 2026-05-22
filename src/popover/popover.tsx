import { defineComponent } from 'vue'
import { PopoverRoot } from 'reka-ui'

/** Popover — root. HeroUI-Vue primitive over reka-ui `PopoverRoot`. */
export const Popover = defineComponent({
  name: 'Popover',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <PopoverRoot {...attrs}>{slots.default?.()}</PopoverRoot>
  }
})

export default Popover
