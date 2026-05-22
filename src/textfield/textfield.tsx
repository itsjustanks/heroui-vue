import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { textFieldVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { TEXT_FIELD_CONTEXT } from './textfield-context'

/**
 * TextField — the form-field wrapper. Faithful Vue port of HeroUI v3 `TextField`.
 *
 * HeroUI v3's `InputGroup` is designed to sit inside a `TextField`: the field
 * provides the layout context and a `variant` the `InputGroup` inherits. Renders
 * `data-slot="textfield"` with the `textFieldVariants` class, exactly as the
 * React component does.
 */
export const TextFieldRoot = defineComponent({
  name: 'TextField',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant, inherited by a nested `InputGroup`. */
    variant: { type: String as PropType<'primary' | 'secondary'>, default: undefined },
    /** Stretch the field to fill its container. */
    fullWidth: { type: Boolean, default: undefined }
  },
  setup (props, { attrs, slots }) {
    provide(TEXT_FIELD_CONTEXT, { variant: computed(() => props.variant) })

    return () => (
      <div
        {...attrs}
        data-slot="textfield"
        class={cn(textFieldVariants({ fullWidth: props.fullWidth }), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default TextFieldRoot
