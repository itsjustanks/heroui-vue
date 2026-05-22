import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from 'reka-ui'
import { dropdownVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownTrigger — the button that opens the dropdown (HeroUI `dropdown__trigger`).
 *
 * Pass `asChild` to render a custom element as the trigger without nesting buttons.
 */
export const DropdownTrigger = defineComponent({
  name: 'DropdownTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_CONTEXT, null)

    return () => (
      <RekaDropdownMenuTrigger
        {...attrs}
        data-slot="dropdown-trigger"
        class={cn((ctx?.slots.value ?? dropdownVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaDropdownMenuTrigger>
    )
  }
})

export default DropdownTrigger
