import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalBody — the main content area (HeroUI `modal__body`). */
export const ModalBody = defineComponent({
  name: 'ModalBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="modal-body"
        class={cn((ctx?.slots.value ?? modalVariants()).body(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalBody
