import { defineComponent } from 'vue'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarShortcut — trailing keyboard-hint text aligned to the item's end. */
export const MenubarShortcut = defineComponent({
  name: 'MenubarShortcut',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        data-slot="menu-shortcut"
        class={cn('ml-auto text-xs tracking-widest text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default MenubarShortcut
