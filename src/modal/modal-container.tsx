import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/**
 * ModalContainer — the positioning layer (HeroUI `modal__container`). A
 * full-viewport flex wrapper that places the dialog; `pointer-events-none` so
 * clicks outside the dialog fall through to the backdrop (dismiss).
 * `placement`: auto | top | center | bottom.
 */
export const ModalContainer = defineComponent({
  name: 'ModalContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    placement: { type: String as PropType<'auto' | 'top' | 'center' | 'bottom'>, default: 'auto' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div
        {...attrs}
        data-slot="modal-container"
        data-placement={props.placement}
        class={cn('modal__container', props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalContainer
