import { computed, defineComponent, provide, toRef, type HTMLAttributes, type PropType } from 'vue'
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
    items: { type: Array as PropType<unknown[]>, default: undefined },
    modelValue: { type: [String, Number] as PropType<string | number | undefined>, default: undefined },
    defaultValue: { type: [String, Number] as PropType<string | number | undefined>, default: undefined },
    disabled: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    placeholder: { type: String, default: undefined },
    /** Visual variant. @default 'primary' */
    variant: { type: String as PropType<SelectVariants['variant']>, default: 'primary' },
    /** Stretch to container width. */
    fullWidth: { type: Boolean as PropType<SelectVariants['fullWidth']>, default: false }
  },
  emits: {
    'update:modelValue': (_value: string | number | undefined) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => selectVariants({ variant: props.variant, fullWidth: props.fullWidth }))
    provide(SELECT_CONTEXT, { slots: styles, placeholder: toRef(props, 'placeholder') })

    return () => (
      <RekaSelectRoot
        {...attrs}
        modelValue={props.modelValue as any}
        defaultValue={props.defaultValue as any}
        disabled={props.disabled}
        onUpdate:modelValue={(value: any) => emit('update:modelValue', value)}
      >
        <div data-slot="select" class={cn(styles.value.base(), props.class)}>
          {slots.default?.()}
        </div>
      </RekaSelectRoot>
    )
  }
})

export default SelectRoot
