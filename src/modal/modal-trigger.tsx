import { defineComponent, inject } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'
import { modalVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { reactClass, reactClassProps, reactDisabled, reactDisabledProps, reactPressAttrs } from '@/lib/react-compat'
import { MODAL_CONTEXT } from './modal-context'

/**
 * ModalTrigger — opens the modal (HeroUI `modal__trigger`).
 *
 * Mirrors HeroUI v3 `ModalTrigger` — renders `data-slot="modal-trigger"` with
 * `role="button"`. Uses reka-ui `DialogTrigger` with `asChild` so the inner
 * element acts as the actual trigger without creating nested interactive elements.
 */
export const ModalTrigger = defineComponent({
  name: 'ModalTrigger',
  inheritAttrs: false,
  props: {
    ...reactClassProps,
    ...reactDisabledProps
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(MODAL_CONTEXT, null)
    return () => {
      const isDisabled = reactDisabled(props)

      return (
        <RekaDialogTrigger asChild>
          <div
            {...reactPressAttrs(attrs)}
            aria-disabled={isDisabled || undefined}
            data-disabled={isDisabled ? 'true' : undefined}
            data-slot="modal-trigger"
            role="button"
            class={cn((ctx?.slots.value ?? modalVariants()).trigger(), reactClass(props))}
          >
            {slots.default?.()}
          </div>
        </RekaDialogTrigger>
      )
    }
  }
})

export default ModalTrigger
