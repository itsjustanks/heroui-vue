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
        data-variant={props.variant}
        class={cn(
          // HeroUI list-box-item.css: relative flex min-h-9 w-full items-center justify-start
          // gap-3 rounded-2xl px-2 py-1.5 outline-none.
          'group relative flex min-h-9 w-full cursor-pointer select-none items-center justify-start gap-3 rounded-2xl px-2 py-1.5 text-sm outline-none transition-[transform,box-shadow] duration-150',
          'has-[[data-list-box-item-indicator]]:pr-7',
          'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'active:scale-[0.98]',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          '[&>svg]:size-4 [&>svg]:shrink-0',
          props.variant === 'danger' && 'text-danger data-[highlighted]:text-danger',
          props.class
        )}
      >
        {slots.default?.()}
      </ListboxItem>
    )
  }
})

export default ListBoxItem
