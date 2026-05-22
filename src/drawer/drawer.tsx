import { computed, defineComponent, provide } from 'vue'
import { DialogRoot } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { DRAWER_CONTEXT, type DrawerPlacement } from './drawer-context'

/**
 * DrawerRoot — root of the HeroUI-Vue drawer, over reka-ui `DialogRoot`.
 *
 * Computes `drawerVariants()` with default placement and provides the slot map
 * to all compound parts. Renders no DOM — reka-ui `DialogRoot` carries
 * focus-trap, scroll-lock, and dismiss behaviour.
 *
 * HeroUI v3 compound: Root > Trigger / Backdrop > Content > Dialog >
 * Header / Heading / Body / Footer / Handle / CloseTrigger.
 */
export const DrawerRoot = defineComponent({
  name: 'DrawerRoot',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    const placement = computed<DrawerPlacement>(() => 'bottom')
    const styles = computed(() => drawerVariants({ placement: placement.value }))
    provide(DRAWER_CONTEXT, { slots: styles, placement })

    return () => <DialogRoot data-slot="drawer-root" {...attrs}>{slots.default?.()}</DialogRoot>
  }
})

export default DrawerRoot
