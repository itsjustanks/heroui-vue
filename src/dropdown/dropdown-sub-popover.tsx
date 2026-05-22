import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubContent as RekaDropdownMenuSubContent } from 'reka-ui'
import { dropdownVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownSubPopover — nested submenu popover surface (same as `DropdownPopover`
 * but wraps reka-ui `DropdownMenuSubContent`).
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE the `asChild` + `withDirectives` pattern.
 */
export const DropdownSubPopover = defineComponent({
  name: 'DropdownSubPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_CONTEXT, null)

    return () => (
      <RekaDropdownMenuSubContent asChild>
        {withDirectives(
          (
            <div
              {...attrs}
              data-slot="dropdown-popover"
              class={cn((ctx?.slots.value ?? dropdownVariants()).popover(), props.class)}
            >
              {slots.default?.()}
            </div>
          ),
          [[vHerouiState]]
        )}
      </RekaDropdownMenuSubContent>
    )
  }
})

export default DropdownSubPopover
