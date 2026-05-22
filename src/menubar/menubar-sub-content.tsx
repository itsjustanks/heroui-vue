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
          class={cn(
            'z-50 flex min-w-32 flex-col gap-0.5 overflow-hidden rounded-xl border border-border bg-popover p-1.5 text-sm text-popover-foreground shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          {slots.default?.()}
        </RekaMenubarSubContent>
      </MenubarPortal>
    )
  }
})

export default MenubarSubContent
