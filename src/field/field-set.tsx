import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * FieldSet — a `<fieldset>` grouping related fields.
 *
 * Emits HeroUI v3 BEM class name from `fieldset.css`:
 *   base: `fieldset`
 */
export const FieldSet = defineComponent({
  name: 'FieldSet',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <fieldset
        {...attrs}
        data-slot="field-set"
        class={cn('fieldset', props.class)}
      >
        {slots.default?.()}
      </fieldset>
    )
  }
})

export default FieldSet
