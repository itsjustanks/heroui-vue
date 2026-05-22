import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * DropdownItem — a single row inside the legacy 2-part `Dropdown`.
 *
 * Faithful HeroUI-Vue port of `shadcn-vue` `DropdownItem` — a quiet,
 * hover-highlighted clickable row. Distinct from `DropdownMenuItem`.
 */
export const DropdownItem = defineComponent({
  name: 'DropdownItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        class={cn(
          'group flex cursor-pointer items-center px-3 py-2 text-sm text-foreground hover:rounded-xl hover:bg-accent hover:text-accent-foreground',
          props.class
        )}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DropdownItem
