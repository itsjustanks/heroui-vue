import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxTrigger, injectComboboxRootContext } from 'reka-ui'
import { comboBoxVariants } from '@heroui/styles'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'
import { COMBO_BOX_CONTEXT } from './combo-box-context'

/**
 * ComboBoxTrigger — the button that toggles the ComboBox popover (HeroUI `combo-box__trigger`).
 *
 * Mirrors HeroUI v3 `ComboBox.Trigger`. Renders `data-open` while the popover is open.
 * With no children, falls back to `IconChevronDown`.
 */
export const ComboBoxTrigger = defineComponent({
  name: 'ComboBoxTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COMBO_BOX_CONTEXT, null)
    const rootContext = injectComboboxRootContext()
    return () => (
      <ComboboxTrigger
        {...attrs}
        data-slot="combo-box-trigger"
        data-open={rootContext.open.value ? 'true' : undefined}
        class={cn((ctx?.slots.value ?? comboBoxVariants()).trigger(), props.class)}
      >
        {slots.default
          ? slots.default()
          : <IconChevronDown data-slot="combo-box-trigger-default-icon" class="size-4" />}
      </ComboboxTrigger>
    )
  }
})

export default ComboBoxTrigger
