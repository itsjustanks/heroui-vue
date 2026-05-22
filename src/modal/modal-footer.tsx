import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** ModalFooter — the bottom action row (HeroUI `modal__footer`): end-aligned actions. */
export const ModalFooter = defineComponent({
  name: 'ModalFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} data-slot="modal-footer" class={cn('modal__footer', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalFooter
