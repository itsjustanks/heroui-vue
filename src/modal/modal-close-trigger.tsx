import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose } from 'reka-ui'
import { modalVariants } from '@heroui/styles'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'
import { MODAL_CONTEXT } from './modal-context'

/** ModalCloseTrigger — the corner close button (HeroUI `modal__close-trigger`). */
export const ModalCloseTrigger = defineComponent({
  name: 'ModalCloseTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => (
      <DialogClose
        {...attrs}
        aria-label="Close"
        data-slot="modal-close-trigger"
        class={cn((ctx?.slots.value ?? modalVariants()).closeTrigger(), props.class)}
      >
        {slots.default?.() ?? <IconX class="size-4" />}
      </DialogClose>
    )
  }
})

export default ModalCloseTrigger
