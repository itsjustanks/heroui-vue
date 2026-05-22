import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { SelectContent as RekaSelectContent, SelectPortal, SelectViewport } from 'reka-ui'
import { selectVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { SELECT_CONTEXT } from './select-context'
import { SelectScrollDownButton } from './select-scroll-down-button'
import { SelectScrollUpButton } from './select-scroll-up-button'

/**
 * SelectPopover — the listbox popover surface (HeroUI v3 `Select.Popover`, `select__popover`).
 *
 * Rendered `asChild` so the data-attribute shim (`vHerouiState`) binds the real
 * overlay element: it mirrors reka-ui's `data-side` → `data-placement` and derives
 * `data-entering`/`data-exiting` from `data-state`, which `select.css` keys its
 * placement-aware enter/exit animation off. DO NOT remove the `withDirectives` shim.
 */
export const SelectPopover = defineComponent({
  name: 'SelectPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    position: { type: String as PropType<'item-aligned' | 'popper'>, default: 'popper' },
    /**
     * When true, renders the listbox inline instead of teleporting to `<body>`.
     * Use inside a Dialog to avoid aria-hidden focus conflicts.
     */
    disablePortal: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SELECT_CONTEXT, null)
    return () => (
      <SelectPortal disabled={props.disablePortal}>
        <RekaSelectContent position={props.position} asChild>
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="select-popover"
                class={cn((ctx?.slots.value ?? selectVariants()).popover(), props.class)}
              >
                <SelectScrollUpButton />
                <SelectViewport
                  data-slot="list-box"
                  class={cn(
                    props.position === 'popper' && 'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)]'
                  )}
                >
                  {slots.default?.()}
                </SelectViewport>
                <SelectScrollDownButton />
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaSelectContent>
      </SelectPortal>
    )
  }
})

export default SelectPopover
