import { defineComponent, inject } from 'vue'
import { DropdownMenuTrigger as RekaDropdownMenuTrigger } from 'reka-ui'
import { dropdownVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownTrigger — the button that opens the dropdown (HeroUI `dropdown__trigger`).
 *
 * Uses `asChild` to forward trigger role onto the inner element without
 * creating nested interactive elements.
 */
export const DropdownTrigger = defineComponent({
  name: 'DropdownTrigger',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_CONTEXT, null)

    return () => {
      const isDisabled = reactDisabled(props)

      return (
        <RekaDropdownMenuTrigger disabled={isDisabled} asChild>
          <div
            {...reactPressAttrs(attrs)}
            aria-disabled={isDisabled || undefined}
            data-disabled={isDisabled ? 'true' : undefined}
            data-slot="dropdown-trigger"
            role="button"
            class={cn((ctx?.slots.value ?? dropdownVariants()).trigger(), reactClass(props))}
          >
            {slots.default?.()}
          </div>
        </RekaDropdownMenuTrigger>
      )
    }
  }
})

export default DropdownTrigger
