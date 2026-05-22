import { defineComponent } from 'vue'
import { DialogRoot } from 'reka-ui'

/**
 * DrawerRoot — root of the HeroUI-Vue drawer, over reka-ui `DialogRoot`.
 *
 * Faithful to HeroUI v3's `Drawer` (a panel that slides from a screen edge).
 * Same 3-layer compound as the modal: Backdrop > Content (positioning) > Dialog
 * (the panel). reka-ui carries the headless behaviour. Renders no DOM.
 */
export const DrawerRoot = defineComponent({
  name: 'DrawerRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <DialogRoot {...attrs}>{slots.default?.()}</DialogRoot>
  }
})

export default DrawerRoot
