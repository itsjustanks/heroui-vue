import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ListboxRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ListBox — a selectable list of options. HeroUI-Vue primitive over reka-ui
 * `ListboxRoot`.
 *
 * Faithful port of HeroUI v3 `ListBox` (`list-box.css`): a vertically stacked
 * list with `gap-1` and `p-1`; supports `selectionMode` `none` | `single` |
 * `multiple`. The `danger` variant tints item indicators/labels red.
 *
 * reka-ui `ListboxRoot` props/emits (`modelValue`, `onUpdate:modelValue`,
 * `selectionBehavior`, `multiple`, `disabled`, `highlightOnHover`, …) forward
 * through `{...attrs}` — only `class` and `variant` are declared. Note that
 * reka-ui expresses single/multiple via the `multiple` boolean rather than a
 * `selectionMode` string; pass `multiple` for HeroUI's `selectionMode="multiple"`.
 */
export const ListBox = defineComponent({
  name: 'ListBox',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant — `danger` tints item indicators/labels. Mirrors HeroUI `list-box--danger`. */
    variant: { type: String as PropType<'default' | 'danger'>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ListboxRoot
        {...attrs}
        data-variant={props.variant}
        class={cn(
          // HeroUI list-box.css: relative flex w-full flex-col gap-1 overflow-clip p-1.
          'relative flex w-full flex-col gap-1 overflow-clip p-1 outline-none',
          props.class
        )}
      >
        {slots.default?.()}
      </ListboxRoot>
    )
  }
})

export default ListBox
