import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose } from 'reka-ui'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'

/** ModalCloseTrigger — the corner close button (HeroUI `modal__close-trigger`). */
export const ModalCloseTrigger = defineComponent({
  name: 'ModalCloseTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogClose
        {...attrs}
        aria-label="Close"
        data-slot="modal-close-trigger"
        class={cn('modal__close-trigger', props.class)}
      >
        {slots.default?.() ?? <IconX class="size-4" />}
      </DialogClose>
    )
  }
})

export default ModalCloseTrigger
