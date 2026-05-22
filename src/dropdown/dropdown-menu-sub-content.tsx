import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubContent as RekaDropdownMenuSubContent } from 'reka-ui'
import { cn } from '@/lib/utils'

/** DropdownMenuSubContent — the nested submenu popover; same surface as the root menu. */
export const DropdownMenuSubContent = defineComponent({
  name: 'DropdownMenuSubContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuSubContent
        {...attrs}
        class={cn(
          'z-50 flex min-w-[12rem] flex-col gap-0.5 overflow-hidden rounded-2xl border border-border bg-popover p-1.5 text-sm text-popover-foreground shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDropdownMenuSubContent>
    )
  }
})

export default DropdownMenuSubContent
