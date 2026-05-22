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
          class={cn(
            'z-50 max-h-96 min-w-[var(--reka-combobox-trigger-width)] origin-[var(--reka-combobox-content-transform-origin)] overflow-hidden rounded-2xl border border-border bg-popover text-sm text-popover-foreground shadow-lg',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            props.class
          )}
        >
          <ComboboxViewport class="max-h-96 overflow-y-auto overscroll-contain p-1.5">
            {slots.default?.()}
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    )
  }
})

export default ComboBoxPopover
