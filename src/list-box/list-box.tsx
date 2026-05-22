import { computed, defineComponent, provide, inject, type HTMLAttributes, type PropType } from 'vue'
import { ListboxRoot } from 'reka-ui'
import { listboxVariants, type ListBoxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LIST_BOX_CONTEXT } from './list-box-context'
import { COMBO_BOX_CONTEXT } from '@/combo-box/combo-box-context'

/**
 * ListBoxRoot — the selectable list container. Faithful Vue port of HeroUI v3 `ListBox`.
 *
 * Computes `listboxVariants` and provides it to compound parts. All reka-ui
 * `ListboxRoot` props (`modelValue`, `onUpdate:modelValue`, `selectionBehavior`,
 * `multiple`, `disabled`, …) pass through via `{...attrs}`.
 *
 * When nested inside a `ComboBox.Popover` (detected via `COMBO_BOX_CONTEXT`),
 * ListBox renders a plain styled container instead of its own `ListboxRoot`:
 * reka-ui's `ComboboxContent` already supplies the listbox context, and the
 * items render as `ComboboxItem`. This lets `ComboBox` compose with the
 * standalone `ListBox` exactly as HeroUI React does.
 */
export const ListBoxRoot = defineComponent({
  name: 'ListBox',
  inheritAttrs: false,
  props: {
    class:   { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'default' */
    variant: { type: String as PropType<ListBoxVariants['variant']>, default: 'default' },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => listboxVariants({ variant: props.variant }))
    provide(LIST_BOX_CONTEXT, { styles })

    const comboBoxCtx = inject(COMBO_BOX_CONTEXT, null)

    return () => {
      // Inside a ComboBox.Popover, ComboboxContent already provides the listbox
      // context — render a plain styled container so items wire up as ComboboxItem.
      if (comboBoxCtx) {
        return (
          <div
            {...attrs}
            data-slot="list-box"
            class={cn(styles.value, props.class)}
          >
            {slots.default?.()}
          </div>
        )
      }

      return (
        <ListboxRoot
          {...attrs}
          data-slot="list-box"
          class={cn(styles.value, props.class)}
        >
          {slots.default?.()}
        </ListboxRoot>
      )
    }
  },
})

export default ListBoxRoot
