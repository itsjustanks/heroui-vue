import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldGroup — a container-query stack of `Field`s.
 *
 * Emits HeroUI v3 BEM class name from `fieldset.css`:
 *   `fieldset__field_group`
 */
export const FieldGroup = defineComponent({
  name: 'FieldGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="field-group"
        class={cn('fieldset__field_group', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default FieldGroup
