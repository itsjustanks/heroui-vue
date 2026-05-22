import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuRadioItem as DropdownMenuRadioItemBase, DropdownMenuItemIndicator } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaDropdownMenuRadioItem: any = DropdownMenuRadioItemBase
import { Circle as IconCircle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/** DropdownMenuRadioItem — HeroUI menu-item with a leading dot indicator. */
export const DropdownMenuRadioItem = defineComponent({
  name: 'DropdownMenuRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuRadioItem
        {...(attrs as Record<string, any>)}
        class={cn(
          'relative flex min-h-9 w-full cursor-pointer select-none items-center gap-3 rounded-2xl py-1.5 pl-7 pr-2.5 text-sm outline-none transition-colors',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        <span class="absolute left-2 flex size-4 items-center justify-center text-muted-foreground">
          <DropdownMenuItemIndicator>
            <IconCircle class="size-2 fill-current" />
          </DropdownMenuItemIndicator>
        </span>
        {slots.default?.()}
      </RekaDropdownMenuRadioItem>
    )
  }
})

export default DropdownMenuRadioItem
