import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxItem, type AcceptableValue } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ListBoxItem — a selectable option within a ListBox. Faithful port of HeroUI
 * v3 `ListBox.Item` (`list-box-item.css`).
 *
 * `min-h-9`, `gap-3`, `rounded-2xl`, `px-2`, a hover surface, a `scale-[0.98]`
 * pressed micro-interaction, and reka-ui `data-[highlighted]` / `data-[state]` /
 * `data-[disabled]` interactive states. `variant="danger"` tints the label red.
 *
 * reka-ui `ListboxItem` props/emits (`value`, `disabled`, `textValue`,
 * `onSelect`, …) forward through `{...attrs}`.
 */
export const ListBoxItem = defineComponent({
  name: 'ListBoxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The unique value of this option — required by reka-ui `ListboxItem`. */
    value: { type: [String, Number, Object, null] as PropType<AcceptableValue>, default: undefined },
    /** Visual variant — `danger` tints the label/indicator red. Mirrors HeroUI `list-box-item--danger`. */
    variant: { type: String as PropType<'default' | 'danger'>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxItem
        {...attrs}
        value={props.value as AcceptableValue}
        data-slot="list-box-item"
        data-variant={props.variant}
        class={cn(
          'list-box-item',
          props.variant === 'danger' ? 'list-box-item--danger' : 'list-box-item--default',
          props.class
        )}
      >
        {slots.default?.()}
      </ListboxItem>
    )
  }
})

export default ListBoxItem
