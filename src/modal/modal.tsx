import { computed, defineComponent, provide, type PropType } from 'vue'
import { DialogRoot, DialogTrigger } from 'reka-ui'
import { modalVariants } from '@heroui/styles'
import { withAutoTrigger } from '@/lib/auto-trigger'
import { MODAL_CONTEXT } from './modal-context'

/**
 * ModalRoot — root of the HeroUI-Vue modal, over reka-ui `DialogRoot`.
 *
 * Computes `modalVariants()` and provides the slot map to all compound parts.
 * Renders no DOM — reka-ui `DialogRoot` carries focus-trap, scroll-lock, and
 * dismiss behaviour. HeroUI v3 compound: Root > Trigger / Backdrop > Container >
 * Dialog > Header / Icon / Heading / Body / Footer / CloseTrigger.
 *
 * Like HeroUI v3, the FIRST child of `<Modal>` is treated as the trigger
 * automatically — no explicit `<Modal.Trigger>` wrapper required (though
 * `<Modal.Trigger>` still works for back-compat).
 */
export const ModalRoot = defineComponent({
  name: 'ModalRoot',
  inheritAttrs: false,
  props: {
    isDismissable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    state: { type: Object as PropType<unknown>, default: undefined }
  },
  setup (_props, { attrs, slots }) {
    const styles = computed(() => modalVariants())
    provide(MODAL_CONTEXT, { slots: styles })

    return () => (
      <DialogRoot data-slot="modal-root" {...attrs}>
        {withAutoTrigger(slots.default?.(), DialogTrigger, 'ModalTrigger')}
      </DialogRoot>
    )
  }
})

export default ModalRoot
