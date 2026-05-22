import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalHeader — the top section (HeroUI `modal__header`): icon + heading stack. */
export const ModalHeader = defineComponent({
  name: 'ModalHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="modal-header"
        class={cn((ctx?.slots.value ?? modalVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalHeader
