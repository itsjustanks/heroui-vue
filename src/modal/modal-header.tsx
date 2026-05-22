import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ModalHeader — the top section (HeroUI `modal__header`): icon + heading stack. */
export const ModalHeader = defineComponent({
  name: 'ModalHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('flex flex-col gap-3', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalHeader
