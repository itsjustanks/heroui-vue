import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { modalVariants, type ModalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

type ModalPlacement = 'auto' | 'top' | 'center' | 'bottom'

/**
 * ModalContainer — the positioning layer (HeroUI `modal__container`). A
 * full-viewport flex wrapper that places the dialog; `pointer-events-none` so
 * clicks outside the dialog fall through to the backdrop (dismiss).
 *
 * `placement`: auto | top | center | bottom.
 * `scroll`: inside (default) | outside — affects container + dialog + body classes.
 * `size`: xs | sm | md (default) | lg | cover | full.
 */
export const ModalContainer = defineComponent({
  name: 'ModalContainer',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    placement: { type: String as PropType<ModalPlacement>, default: 'auto' },
    /** Controls scroll behaviour — matched to `modalVariants`. @default 'inside' */
    scroll: { type: String as PropType<ModalVariants['scroll']>, default: 'inside' },
    /** Dialog size. @default 'md' */
    size: { type: String as PropType<ModalVariants['size']>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => modalVariants({ scroll: props.scroll, size: props.size }))
    return () => (
      <div
        {...attrs}
        data-slot="modal-container"
        data-placement={props.placement}
        class={cn(styles.value.container(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ModalContainer
