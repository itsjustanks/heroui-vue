import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalTrigger — opens the modal (HeroUI `modal__trigger`). Pass `asChild` to use a custom element. */
export const ModalTrigger = defineComponent({
  name: 'ModalTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <RekaDialogTrigger
        {...attrs}
        data-slot="modal-trigger"
        class={cn((ctx?.slots.value ?? modalVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaDialogTrigger>
    )
  }
})

export default ModalTrigger
