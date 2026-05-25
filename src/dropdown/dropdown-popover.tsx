import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
import { dropdownVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { DROPDOWN_CONTEXT } from './dropdown-context'

/**
 * DropdownPopover — the popover surface (HeroUI `dropdown__popover`).
 *
 * Rendered `asChild` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element: it mirrors reka-ui's `data-side` to `data-placement`
 * and derives `data-entering`/`data-exiting` from `data-state`, which
 * `dropdown.css` keys its placement-aware enter/exit animation off.
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE the `asChild` + `withDirectives` pattern.
 */
export const DropdownPopover = defineComponent({
  name: 'DropdownPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    side: { type: String as PropType<'top' | 'right' | 'bottom' | 'left' | undefined>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end' | undefined>, default: undefined },
    alignOffset: { type: Number, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DROPDOWN_CONTEXT, null)

    return () => (
      <DropdownMenuPortal>
        <RekaDropdownMenuContent
          side={props.side}
          align={props.align}
          alignOffset={props.alignOffset}
          sideOffset={props.sideOffset}
          asChild
        >
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
        </RekaDropdownMenuContent>
      </DropdownMenuPortal>
    )
  }
})

export default DropdownPopover
