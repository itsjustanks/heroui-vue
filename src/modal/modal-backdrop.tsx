import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogOverlay, DialogPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * ModalBackdrop — the dim overlay layer (HeroUI `modal__backdrop`). Portals the
 * modal and renders the backdrop; the Container is passed as its children.
 * `variant`: opaque (default) | blur | transparent.
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) derives
 * `data-entering`/`data-exiting` from reka-ui's `data-state`, which
 * `modal.css` keys the backdrop's fade in/out off.
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
        <DialogOverlay asChild>
          {withDirectives(
            (
              <div
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
            ),
            [[vHerouiState]]
          )}
        </DialogOverlay>
        {slots.default?.()}
      </DialogPortal>
    )
  }
})

export default ModalBackdrop
