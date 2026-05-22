import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuCheckboxItem as RekaDropdownMenuCheckboxItem, DropdownMenuItemIndicator } from 'reka-ui'
import { Check as IconCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/** DropdownMenuCheckboxItem — HeroUI menu-item with a leading checkmark indicator. */
export const DropdownMenuCheckboxItem = defineComponent({
  name: 'DropdownMenuCheckboxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuCheckboxItem
        {...attrs}
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-2xl py-1.5 pl-7 pr-2.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        <span class="absolute left-2 flex size-4 items-center justify-center text-muted-foreground">
          <DropdownMenuItemIndicator>
            <IconCheck class="size-3.5" />
          </DropdownMenuItemIndicator>
        </span>
        {slots.default?.()}
      </RekaDropdownMenuCheckboxItem>
    )
  }
})

export default DropdownMenuCheckboxItem
