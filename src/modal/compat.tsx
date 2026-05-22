import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose as RekaDialogClose, DialogDescription as RekaDialogDescription } from 'reka-ui'
import { cn } from '@/lib/utils'
import ModalRoot from './modal'
import ModalTrigger from './modal-trigger'
import ModalBackdrop from './modal-backdrop'
import ModalContainer from './modal-container'
import ModalDialog from './modal-dialog'
import ModalHeader from './modal-header'
import ModalHeading from './modal-heading'
import ModalFooter from './modal-footer'
import ModalCloseTrigger from './modal-close-trigger'

/**
 * shadcn-vue `Dialog` compatibility surface.
 *
 * Re-exports the `Modal.*` compound under shadcn-vue's `Dialog*` names, so a
 * project migrating from shadcn-vue can adopt heroui-vue with a mechanical
 * import-path swap, then converge on the real `Modal.*` compound API later.
 */

/** Root — same role as HeroUI `Modal`. */
export const Dialog = ModalRoot
/** Trigger. */
export const DialogTrigger = ModalTrigger
/** Header — maps to `Modal.Header`. */
export const DialogHeader = ModalHeader
/** Title — maps to `Modal.Heading` (the reka-ui dialog title). */
export const DialogTitle = ModalHeading
/** Footer — maps to `Modal.Footer`. */
export const DialogFooter = ModalFooter

/**
 * Content — shadcn bundled overlay+content+close in one component; this compat
 * renders the full HeroUI stack (Backdrop > Container > Dialog) + corner close.
 */
export const DialogContent = defineComponent({
  name: 'DialogContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <ModalBackdrop>
        <ModalContainer>
          <ModalDialog {...attrs} class={props.class}>
            {slots.default?.()}
            <ModalCloseTrigger />
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    )
  }
})

/** Scroll variant — same surface; the dialog body owns its own overflow. */
export const DialogScrollContent = DialogContent

/** Description — the reka-ui dialog description, muted body text. */
export const DialogDescription = defineComponent({
  name: 'DialogDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDialogDescription {...attrs} class={cn('text-sm text-muted-foreground', props.class)}>
        {slots.default?.()}
      </RekaDialogDescription>
    )
  }
})

/** Close — generic close wrapper (supports `as-child`). */
export const DialogClose = defineComponent({
  name: 'DialogClose',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <RekaDialogClose {...attrs}>{slots.default?.()}</RekaDialogClose>
  }
})
