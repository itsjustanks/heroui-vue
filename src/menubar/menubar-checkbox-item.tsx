import { defineComponent } from 'vue'
import { MenubarCheckboxItem as RekaMenubarCheckboxItem, MenubarItemIndicator } from 'reka-ui'
import { Check as IconCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarCheckboxItem — HeroUI menu-item with a leading checkmark indicator. */
export const MenubarCheckboxItem = defineComponent({
  name: 'MenubarCheckboxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarCheckboxItem
        {...attrs}
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-lg py-1.5 pl-7 pr-2.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        <span class="absolute left-2 flex size-4 items-center justify-center text-muted-foreground">
          <MenubarItemIndicator>
            <IconCheck class="size-3.5" />
          </MenubarItemIndicator>
        </span>
        {slots.default?.()}
      </RekaMenubarCheckboxItem>
    )
  }
})

export default MenubarCheckboxItem
