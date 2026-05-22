import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxAnchor } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxInputGroup — the field row that holds the `ComboBoxInput` and the
 * `ComboBoxTrigger`. Faithful port of HeroUI v3 `ComboBox.InputGroup`
 * (`combo-box.css` `.combo-box__input-group`).
 *
 * Built over reka-ui `ComboboxAnchor` so the popover positions against it. A
 * `relative isolate inline-flex` row; the trigger overlays its right edge.
 */
export const ComboBoxInputGroup = defineComponent({
  name: 'ComboBoxInputGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Stretch the input group to full width. Mirrors HeroUI `combo-box__input-group--full-width`. */
    fullWidth: { type: Boolean, default: false }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ComboboxAnchor
        {...attrs}
        class={cn(
          'relative isolate inline-flex items-center',
          props.fullWidth && 'w-full',
          props.class
        )}
      >
        {slots.default?.()}
      </ComboboxAnchor>
    )
  }
})

export default ComboBoxInputGroup
