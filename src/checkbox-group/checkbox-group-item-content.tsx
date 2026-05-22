import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupItemContent — the label/description area of a CheckboxGroupItem.
 * Faithful port of HeroUI v3 `Checkbox.Content`: a `min-w-0` flex column so its
 * label and description can wrap/truncate cleanly.
 *
 * Pair it with a `CheckboxGroupItemLabel` and an optional
 * `CheckboxGroupDescription`.
 */
export const CheckboxGroupItemContent = defineComponent({
  name: 'CheckboxGroupItemContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="checkbox-content"
        class={cn('checkbox__content', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default CheckboxGroupItemContent
