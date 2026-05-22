import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupDescription — supporting helper text under the group label or a
 * group item. Mirrors the `Description` placed inside HeroUI v3's `CheckboxGroup`
 * or `Checkbox.Content`.
 */
export const CheckboxGroupDescription = defineComponent({
  name: 'CheckboxGroupDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <p {...attrs} class={cn('text-xs text-muted-foreground', props.class)}>
        {slots.default?.()}
      </p>
    )
  }
})

export default CheckboxGroupDescription
