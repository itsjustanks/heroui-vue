import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { ListboxRoot } from 'reka-ui'
import { listboxVariants, type ListBoxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { LIST_BOX_CONTEXT } from './list-box-context'

/**
 * ListBoxRoot — the selectable list container. Faithful Vue port of HeroUI v3 `ListBox`.
 *
 * Computes `listboxVariants` and provides it to compound parts. All reka-ui
 * `ListboxRoot` props (`modelValue`, `onUpdate:modelValue`, `selectionBehavior`,
 * `multiple`, `disabled`, …) pass through via `{...attrs}`.
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

    return () => (
      <ListboxRoot
        {...attrs}
        data-slot="list-box"
        class={cn(styles.value, props.class)}
      >
        {slots.default?.()}
      </ListboxRoot>
    )
  },
})

export default ListBoxRoot
