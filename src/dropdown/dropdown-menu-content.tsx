import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuContent as RekaDropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * DropdownMenuContent — the popover surface (HeroUI `dropdown__popover` +
 * `dropdown__menu`).
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element: it mirrors reka-ui's `data-side` to `data-placement`
 * and derives `data-entering`/`data-exiting` from `data-state`, which
 * `dropdown.css` keys its placement-aware enter/exit animation off.
 */
export const DropdownMenuContent = defineComponent({
  name: 'DropdownMenuContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DropdownMenuPortal>
        <RekaDropdownMenuContent sideOffset={props.sideOffset} asChild>
          {withDirectives(
            (
              <div {...attrs} class={cn('dropdown__popover', props.class)}>
                <div data-slot="dropdown-menu" class="dropdown__menu">
                  {slots.default?.()}
                </div>
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaDropdownMenuContent>
      </DropdownMenuPortal>
    )
  }
})

export default DropdownMenuContent
