import { defineComponent } from 'vue'
import { MenubarLabel as RekaMenubarLabel } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarLabel — a small, muted section heading inside the menu. */
export const MenubarLabel = defineComponent({
  name: 'MenubarLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    inset: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarLabel
        {...attrs}
        data-slot="label"
        class={cn(props.class)}
      >
        {slots.default?.()}
      </RekaMenubarLabel>
    )
  }
})

export default MenubarLabel
