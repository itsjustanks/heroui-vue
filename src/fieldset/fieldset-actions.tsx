import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** FieldsetActions — trailing actions row (BEM `fieldset__actions`). */
export const FieldsetActions = defineComponent({
  name: 'FieldsetActions',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="fieldset-actions" class={cn('fieldset__actions', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default FieldsetActions
