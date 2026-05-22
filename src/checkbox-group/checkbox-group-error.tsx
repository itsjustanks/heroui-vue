import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupError — the validation error message for a CheckboxGroup. Mirrors
 * the `FieldError` placed inside HeroUI v3's `CheckboxGroup`.
 *
 * Renders only when given content; styled in the danger token, `text-xs`.
 */
export const CheckboxGroupError = defineComponent({
  name: 'CheckboxGroupError',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => {
      const content = slots.default?.()
      if (!content || (Array.isArray(content) && content.length === 0)) return null
      return (
        <p {...attrs} class={cn('text-xs text-danger', props.class)}>
          {content}
        </p>
      )
    }
  }
})

export default CheckboxGroupError
