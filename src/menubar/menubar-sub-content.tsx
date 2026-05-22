import { defineComponent } from 'vue'
import { MenubarSubContent as RekaMenubarSubContent, MenubarPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarSubContent — the nested submenu popover; same surface as the root menu. */
export const MenubarSubContent = defineComponent({
  name: 'MenubarSubContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <MenubarPortal>
        <RekaMenubarSubContent
          {...attrs}
          data-slot="menu"
          class={cn('menu', props.class)}
        >
          {slots.default?.()}
        </RekaMenubarSubContent>
      </MenubarPortal>
    )
  }
})

export default MenubarSubContent
