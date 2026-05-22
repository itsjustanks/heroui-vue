import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxContent, ComboboxPortal, ComboboxViewport } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxPopover — the floating surface that holds the filtered option list.
 * Faithful port of HeroUI v3 `ComboBox.Popover` (`combo-box.css`
 * `.combo-box__popover`).
 *
 * Built over reka-ui `ComboboxContent` (in a `ComboboxPortal`) with a
 * `ComboboxViewport` so the list scrolls. An overlay card sized to the trigger
 * width, with placement-aware enter/exit animation. Styling adapted from
 * HeroUI: React-Aria `data-[entering]`/`data-[placement]` → reka-ui
 * `data-[state]`/`data-[side]`; HeroUI overlay tokens → repo `bg-popover`.
 *
 * reka-ui `ComboboxContent` props (`side`, `sideOffset`, `align`,
 * `avoidCollisions`, `position`, …) forward through `{...attrs}`.
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
        <ComboboxContent
          {...attrs}
          sideOffset={props.sideOffset}
          position="popper"
          class={cn('combo-box__popover', props.class)}
        >
          <ComboboxViewport>
            {slots.default?.()}
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    )
  }
})

export default ComboBoxPopover
