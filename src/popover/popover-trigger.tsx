import { defineComponent } from 'vue'
import { PopoverTrigger as RekaPopoverTrigger } from 'reka-ui'

/** PopoverTrigger — opens the popover. Pass `as-child` to use a custom element. */
export const PopoverTrigger = defineComponent({
  name: 'PopoverTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaPopoverTrigger {...attrs}>{slots.default?.()}</RekaPopoverTrigger>
  }
})

export default PopoverTrigger
