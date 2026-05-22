import { computed, defineComponent, provide, type PropType } from 'vue'
import { DialogRoot, DialogTrigger } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { withAutoTrigger } from '@/lib/auto-trigger'
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
 *
 * Like HeroUI v3, the FIRST child of `<Drawer>` is treated as the trigger
 * automatically — no explicit `<Drawer.Trigger>` wrapper required (though
 * `<Drawer.Trigger>` still works for back-compat).
 */
export const DrawerRoot = defineComponent({
  name: 'DrawerRoot',
  inheritAttrs: false,
  props: {
    isDismissable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    state: { type: Object as PropType<unknown>, default: undefined }
  },
  setup (_props, { attrs, slots }) {
    const placement = computed<DrawerPlacement>(() => 'bottom')
    const styles = computed(() => drawerVariants({ placement: placement.value }))
    provide(DRAWER_CONTEXT, { slots: styles, placement })

    return () => (
      <DialogRoot data-slot="drawer-root" {...attrs}>
        {withAutoTrigger(slots.default?.(), DialogTrigger, 'DrawerTrigger')}
      </DialogRoot>
    )
  }
})

export default DrawerRoot
