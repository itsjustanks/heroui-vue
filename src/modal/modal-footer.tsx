import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalFooter — the bottom action row (HeroUI `modal__footer`): end-aligned actions. */
export const ModalFooter = defineComponent({
  name: 'ModalFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="modal-footer"
        class={cn((ctx?.slots.value ?? modalVariants()).footer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalFooter
