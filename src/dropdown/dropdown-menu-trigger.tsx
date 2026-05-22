import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

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
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuTrigger {...attrs} class={cn('dropdown__trigger', props.class)}>{slots.default?.()}</RekaDropdownMenuTrigger>
    )
  }
})

export default DropdownMenuTrigger
