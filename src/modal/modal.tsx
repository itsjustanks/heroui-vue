import { defineComponent } from 'vue'
import { DialogRoot } from 'reka-ui'

/**
 * ModalRoot — root of the HeroUI-Vue modal, over reka-ui `DialogRoot`.
 *
 * Faithful to HeroUI v3's `Modal` (a 3-layer compound: Backdrop > Container >
 * Dialog). reka-ui carries the headless behaviour (focus trap, scroll lock,
 * dismiss). Renders no DOM.
 */
export const ModalRoot = defineComponent({
  name: 'ModalRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <DialogRoot {...attrs}>{slots.default?.()}</DialogRoot>
  }
})

export default ModalRoot
