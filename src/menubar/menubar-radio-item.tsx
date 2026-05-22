import { defineComponent } from 'vue'
import { MenubarRadioItem as MenubarRadioItemBase, MenubarItemIndicator } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaMenubarRadioItem: any = MenubarRadioItemBase
import { Circle as IconCircle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarRadioItem — HeroUI menu-item with a leading dot indicator. */
export const MenubarRadioItem = defineComponent({
  name: 'MenubarRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarRadioItem
        {...(attrs as Record<string, any>)}
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-lg py-1.5 pl-7 pr-2.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        <span class="absolute left-2 flex size-4 items-center justify-center text-muted-foreground">
          <MenubarItemIndicator>
            <IconCircle class="size-2 fill-current" />
          </MenubarItemIndicator>
        </span>
        {slots.default?.()}
      </RekaMenubarRadioItem>
    )
  }
})

export default MenubarRadioItem
