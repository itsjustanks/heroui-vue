import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectItem as SelectItemBase, SelectItemText } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaSelectItem: any = SelectItemBase
import { IconCheck } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * SelectItem — HeroUI `list-box-item`.
 *
 * Structural fidelity to HeroUI v3 React `ListBoxItemRoot`:
 *   root[data-slot="list-box-item"]
 *     > span[data-slot="list-box-item-indicator" aria-hidden].list-box-item__indicator
 *       > svg[data-slot="list-box-item-indicator--checkmark"]
 *
 * The indicator span is **always present in the DOM** (not conditionally
 * rendered) — it matches the React compound which uses a plain `<span>` with
 * `data-visible` driven by CSS visibility. This replaces the reka-ui
 * `SelectItemIndicator` which only rendered when the item was selected,
 * breaking any CSS structural selectors that expect the indicator wrapper to
 * always exist.
 */
let autoValueId = 0

export const SelectItem = defineComponent({
  name: 'SelectItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Value matched against the parent Select's `modelValue`. When omitted,
     *  mints a stable per-mount auto-id so React-style `<SelectItem key={i}>`
     *  works (Vue does not forward `key` as a prop). */
    value: { type: [String, Number] as PropType<string | number>, default: undefined },
    disabled: { type: Boolean as PropType<boolean | undefined>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const autoValue = `select-item-${++autoValueId}`
    return () => (
      <RekaSelectItem
        {...(attrs as Record<string, any>)}
        value={props.value !== undefined ? props.value : autoValue}
        disabled={props.disabled}
        data-slot="list-box-item"
        class={cn('list-box-item list-box-item--default', props.class)}
      >
        <span
          aria-hidden="true"
          class="list-box-item__indicator"
          data-slot="list-box-item-indicator"
        >
          <IconCheck class="size-4" data-slot="list-box-item-indicator--checkmark" />
        </span>
        <SelectItemText>{slots.default?.()}</SelectItemText>
      </RekaSelectItem>
    )
  }
})

export default SelectItem
