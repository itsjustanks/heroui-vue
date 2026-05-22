import { computed, defineComponent, provide } from 'vue'
import { DialogRoot } from 'reka-ui'
import { modalVariants } from '@heroui/styles'
import { MODAL_CONTEXT } from './modal-context'

/**
 * ModalRoot — root of the HeroUI-Vue modal, over reka-ui `DialogRoot`.
 *
 * Computes `modalVariants()` and provides the slot map to all compound parts.
 * Renders no DOM — reka-ui `DialogRoot` carries focus-trap, scroll-lock, and
 * dismiss behaviour. HeroUI v3 compound: Root > Trigger / Backdrop > Container >
 * Dialog > Header / Icon / Heading / Body / Footer / CloseTrigger.
 */
export const ModalRoot = defineComponent({
  name: 'ModalRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    const styles = computed(() => modalVariants())
    provide(MODAL_CONTEXT, { slots: styles })

    return () => <DialogRoot data-slot="modal-root" {...attrs}>{slots.default?.()}</DialogRoot>
  }
})

export default ModalRoot
