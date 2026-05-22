import { computed, defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogOverlay, DialogPortal } from 'reka-ui'
import { modalVariants, type ModalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * ModalBackdrop — the dim overlay layer (HeroUI `modal__backdrop`). Portals the
 * modal and renders the backdrop; the Container MUST be passed as its children.
 *
 * STRUCTURAL NOTE: In HeroUI React, `ModalOverlay` (the backdrop) wraps
 * `Modal` (the container) as a direct child:
 *
 *   ModalOverlay[data-slot="modal-backdrop"]
 *     └─ Modal[data-slot="modal-container"]
 *          └─ Dialog[data-slot="modal-dialog"]
 *
 * `variant` calls `modalVariants({ variant })` so the correct backdrop modifier
 * class is applied, mirroring how React's ModalBackdrop merges variant-specific
 * slot overrides.
 *
 * OVERLAY SHIM: Rendered `asChild` so `vHerouiState` binds the real element
 * and derives `data-entering`/`data-exiting` from reka-ui's `data-state`.
 * Do NOT remove `withDirectives` — `modal.css` keys backdrop fade off it.
 */
export const ModalBackdrop = defineComponent({
  name: 'ModalBackdrop',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Backdrop visual variant. @default 'opaque' */
    variant: { type: String as PropType<ModalVariants['variant']>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => modalVariants({ variant: props.variant }))
    return () => (
      <DialogPortal>
        <DialogOverlay asChild>
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="modal-backdrop"
                class={cn(styles.value.backdrop(), props.class)}
              >
                {/* Container (ModalContainer > ModalDialog) must nest INSIDE the backdrop,
                    matching React's ModalOverlay > Modal > Dialog tree. */}
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </DialogOverlay>
      </DialogPortal>
    )
  }
})

export default ModalBackdrop
