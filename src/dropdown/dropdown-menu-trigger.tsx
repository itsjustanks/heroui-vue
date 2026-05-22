import { defineComponent } from 'vue'
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from 'reka-ui'

/**
 * DropdownMenuTrigger — opens the menu.
 *
 * Pass `as-child` to render a custom element (e.g. a `<Button>`) as the trigger
 * itself — without it, the trigger renders its own `<button>` and a `<Button>`
 * child would nest one button inside another.
 */
export const DropdownMenuTrigger = defineComponent({
  name: 'DropdownMenuTrigger',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuTrigger {...attrs}>{slots.default?.()}</RekaDropdownMenuTrigger>
    )
  }
})

export default DropdownMenuTrigger
