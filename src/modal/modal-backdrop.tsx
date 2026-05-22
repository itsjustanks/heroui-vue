import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogOverlay, DialogPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ModalBackdrop — the dim overlay layer (HeroUI `modal__backdrop`). Portals the
 * modal and renders the backdrop; the Container is passed as its children.
 * `variant`: opaque (default) | blur | transparent.
 */
export const ModalBackdrop = defineComponent({
  name: 'ModalBackdrop',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<'opaque' | 'blur' | 'transparent'>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogPortal>
        <DialogOverlay
          {...attrs}
          data-slot="modal-backdrop"
          class={cn(
            'modal__backdrop',
            props.variant === 'opaque' ? 'modal__backdrop--opaque'
              : props.variant === 'blur' ? 'modal__backdrop--blur'
                : 'modal__backdrop--transparent',
            props.class
          )}
        />
        {slots.default?.()}
      </DialogPortal>
    )
  }
})

export default ModalBackdrop
