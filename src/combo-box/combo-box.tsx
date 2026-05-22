import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxRoot } from 'reka-ui'
import { comboBoxVariants, type ComboBoxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COMBO_BOX_CONTEXT } from './combo-box-context'

/**
 * ComboBoxRoot — the root of the HeroUI v3 `ComboBox` compound component.
 *
 * Computes `comboBoxVariants` and provides the slot map to all compound parts
 * (`ComboBox.InputGroup`, `ComboBox.Trigger`, `ComboBox.Popover`).
 *
 * reka-ui `ComboboxRoot` props/emits forward through `{...attrs}`:
 * `modelValue` / `onUpdate:modelValue`, `open` / `onUpdate:open`, `multiple`,
 * `disabled`, `by`, `ignoreFilter`, `resetSearchTermOnSelect`, `name`, `required`.
 */
export const ComboBoxRoot = defineComponent({
  name: 'ComboBoxRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Stretch to container width. Mirrors HeroUI `combo-box--full-width`. */
    fullWidth: { type: Boolean as PropType<ComboBoxVariants['fullWidth']>, default: false }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => comboBoxVariants({ fullWidth: props.fullWidth }))
    provide(COMBO_BOX_CONTEXT, { slots: styles })

    return () => (
      <ComboboxRoot
        {...attrs}
        data-slot="combo-box"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </ComboboxRoot>
    )
  }
})

export default ComboBoxRoot
