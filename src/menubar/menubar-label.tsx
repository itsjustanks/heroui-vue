import { defineComponent } from 'vue'
import { MenubarLabel as RekaMenubarLabel } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarLabel — a small, muted section heading inside the menu (HeroUI `menu-section` label). */
export const MenubarLabel = defineComponent({
  name: 'MenubarLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarLabel
        {...attrs}
        data-slot="menu-label"
        class={cn('px-2.5 py-1.5 text-xs font-medium text-muted-foreground', props.class)}
      >
        {slots.default?.()}
      </RekaMenubarLabel>
    )
  }
})

export default MenubarLabel
