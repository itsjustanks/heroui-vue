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
    open: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    modelValue: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    isOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    defaultOpen: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    onOpenChange: { type: Function as PropType<(open: boolean) => void>, default: undefined },
    isDismissable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    state: { type: Object as PropType<unknown>, default: undefined }
  },
  emits: {
    'update:open': (_open: boolean) => true,
    'update:modelValue': (_open: boolean) => true
  },
  setup (props, { attrs, emit, slots }) {
    const styles = computed(() => modalVariants())
    provide(MODAL_CONTEXT, { slots: styles })

    const handleOpenChange = (open: boolean) => {
      props.onOpenChange?.(open)
      emit('update:open', open)
      emit('update:modelValue', open)
    }

    return () => {
      const controlledOpen = props.isOpen ?? props.open ?? props.modelValue

      return (
        <DialogRoot
          data-slot="modal-root"
          {...attrs}
          open={controlledOpen}
          defaultOpen={props.defaultOpen}
          onUpdate:open={handleOpenChange}
        >
          {withAutoTrigger(slots.default?.(), DialogTrigger, 'ModalTrigger')}
        </DialogRoot>
      )
    }
  }
})

export default ModalRoot
