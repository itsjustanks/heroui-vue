import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalIcon — optional icon indicator in the header (HeroUI `modal__icon`). */
export const ModalIcon = defineComponent({
  name: 'ModalIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="modal-icon"
        class={cn((ctx?.slots.value ?? modalVariants()).icon(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalIcon
