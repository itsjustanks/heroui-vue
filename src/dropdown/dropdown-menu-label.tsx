import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuLabel as RekaDropdownMenuLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/** DropdownMenuLabel — a small, muted section heading inside the menu. */
export const DropdownMenuLabel = defineComponent({
  name: 'DropdownMenuLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    inset: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuLabel
        {...attrs}
        data-slot="label"
        class={cn(
          'px-2.5 py-1.5 text-xs font-medium text-muted-foreground',
          props.inset && 'pl-8',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDropdownMenuLabel>
    )
  }
})

export default DropdownMenuLabel
