import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogTitle } from 'reka-ui'
import { cn } from '@/lib/utils'

/** ModalHeading — the modal title (HeroUI `modal__heading`), wired as the reka-ui dialog title. */
export const ModalHeading = defineComponent({
  name: 'ModalHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogTitle {...attrs} class={cn('align-middle text-base font-medium text-foreground', props.class)}>
        {slots.default?.()}
      </DialogTitle>
    )
  }
})

export default ModalHeading
