import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxContent, ComboboxPortal, ComboboxViewport } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * ComboBoxPopover — the floating surface that holds the filtered option list
 * (HeroUI v3 `ComboBox.Popover`, `combo-box__popover`).
 *
 * Built over reka-ui `ComboboxContent` (in a `ComboboxPortal`) with a
 * `ComboboxViewport` so the list scrolls. Rendered `as-child` so the
 * data-attribute shim (`v-heroui-state`) binds the real overlay element: it
 * mirrors reka-ui's `data-side` to `data-placement` and derives
 * `data-entering`/`data-exiting` from `data-state`, which `combo-box.css` keys
 * its placement-aware enter/exit animation off.
 */
export const ComboBoxPopover = defineComponent({
  name: 'ComboBoxPopover',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    sideOffset: { type: Number, default: 4 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxPortal>
        <ComboboxContent sideOffset={props.sideOffset} position="popper" asChild>
          {withDirectives(
            (
              <div {...attrs} class={cn('combo-box__popover', props.class)}>
                <ComboboxViewport>
                  {slots.default?.()}
                </ComboboxViewport>
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
