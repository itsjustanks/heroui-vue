import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** DropdownMenuShortcut — trailing keyboard-hint text aligned to the item's end. */
export const DropdownMenuShortcut = defineComponent({
  name: 'DropdownMenuShortcut',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span {...attrs} class={cn('ml-auto text-xs tracking-widest opacity-60', props.class)}>
        {slots.default?.()}
      </span>
    )
  }
})

export default DropdownMenuShortcut
