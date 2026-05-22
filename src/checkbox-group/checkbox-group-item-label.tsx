import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupItemLabel — the title of a CheckboxGroupItem. Mirrors the `Label`
 * placed inside HeroUI v3's `Checkbox.Content`.
 *
 * Rendered as a plain span (the parent `CheckboxGroupItem` is itself the
 * clickable `CheckboxRoot`, so a nested `<label>` is not needed). `text-sm
 * font-medium`.
 */
export const CheckboxGroupItemLabel = defineComponent({
  name: 'CheckboxGroupItemLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <span
        {...attrs}
        class={cn('text-sm font-medium leading-none text-foreground', props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

export default CheckboxGroupItemLabel
