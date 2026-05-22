import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose } from 'reka-ui'
import { X as IconX } from 'lucide-vue-next'
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
        class={cn(
          'absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground',
          props.class
        )}
      >
        {slots.default?.() ?? <IconX class="size-4" />}
      </DialogClose>
    )
  }
})

export default ModalCloseTrigger
