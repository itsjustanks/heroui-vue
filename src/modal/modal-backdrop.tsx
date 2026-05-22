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
          class={cn(
            'fixed inset-0 z-50',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            props.variant === 'opaque' && 'bg-black/50',
            props.variant === 'blur' && 'bg-black/50 backdrop-blur-md',
            props.variant === 'transparent' && 'bg-transparent',
            props.class
          )}
        />
        {slots.default?.()}
      </DialogPortal>
    )
  }
})

export default ModalBackdrop
