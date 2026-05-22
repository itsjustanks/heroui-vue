import { defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxContent, ComboboxPortal } from 'reka-ui'
import { comboBoxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { COMBO_BOX_CONTEXT } from './combo-box-context'

/**
 * ComboBoxPopover — the floating surface holding the filtered option list
 * (HeroUI v3 `ComboBox.Popover`, `combo-box__popover`).
 *
 * Rendered `asChild` so the data-attribute shim (`vHerouiState`) binds the real
 * overlay element: it mirrors reka-ui's `data-side` → `data-placement` and derives
 * `data-entering`/`data-exiting` from `data-state`, which `combo-box.css` keys its
 * placement-aware enter/exit animation off. DO NOT remove the `withDirectives` shim.
 */
export const ComboBoxPopover = defineComponent({
  name: 'ComboBoxPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COMBO_BOX_CONTEXT, null)
    return () => (
      <ComboboxPortal>
        <ComboboxContent sideOffset={props.sideOffset} position="popper" asChild>
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="combo-box-popover"
                class={cn((ctx?.slots.value ?? comboBoxVariants()).popover(), props.class)}
              >
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </ComboboxContent>
      </ComboboxPortal>
    )
  }
})

export default ComboBoxPopover
