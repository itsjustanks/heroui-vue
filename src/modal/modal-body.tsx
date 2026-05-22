import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ModalBody — the main content area (HeroUI `modal__body`): muted body text. */
export const ModalBody = defineComponent({
  name: 'ModalBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="modal-body" class={cn('modal__body', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalBody
