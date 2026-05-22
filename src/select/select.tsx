import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { SelectRoot as RekaSelectRoot } from 'reka-ui'
import { selectVariants, type SelectVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SELECT_CONTEXT } from './select-context'

/**
 * SelectRoot — the root of the HeroUI v3 `Select` compound component.
 *
 * Computes `selectVariants` and provides the slot map to all compound parts
 * (`Select.Trigger`, `Select.Value`, `Select.Indicator`, `Select.Popover`).
 */
export const SelectRoot = defineComponent({
  name: 'SelectRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. @default 'primary' */
    variant: { type: String as PropType<SelectVariants['variant']>, default: 'primary' },
    /** Stretch to container width. */
    fullWidth: { type: Boolean as PropType<SelectVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => selectVariants({ variant: props.variant, fullWidth: props.fullWidth }))
    provide(SELECT_CONTEXT, { slots: styles })

    return () => (
      <RekaSelectRoot {...attrs}>
        <div data-slot="select" class={cn(styles.value.base(), props.class)}>
          {slots.default?.()}
        </div>
      </RekaSelectRoot>
    )
  }
})

export default SelectRoot
