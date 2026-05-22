import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxAnchor } from 'reka-ui'
import { comboBoxVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { COMBO_BOX_CONTEXT } from './combo-box-context'

/**
 * ComboBoxInputGroup — the field row holding the `ComboBoxInput` and `ComboBoxTrigger`.
 *
 * Mirrors HeroUI v3 `ComboBox.InputGroup` (`combo-box__input-group`). Built over
 * reka-ui `ComboboxAnchor` so the popover positions against it.
 */
export const ComboBoxInputGroup = defineComponent({
  name: 'ComboBoxInputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(COMBO_BOX_CONTEXT, null)
    return () => (
      <ComboboxAnchor
        {...attrs}
        data-slot="combo-box-input-group"
        class={cn((ctx?.slots.value ?? comboBoxVariants()).inputGroup(), props.class)}
      >
        {slots.default?.()}
      </ComboboxAnchor>
    )
  }
})

export default ComboBoxInputGroup
