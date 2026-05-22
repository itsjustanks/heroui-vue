import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { drawerVariants, type DrawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT, type DrawerPlacement } from './drawer-context'

/**
 * DrawerContent — the positioning layer (HeroUI `drawer__content`). A
 * full-viewport flex wrapper that anchors the panel to a screen edge;
 * `pointer-events-none` so clicks outside the panel fall through to the backdrop.
 *
 * Re-provides context with placement-specific slot overrides so `DrawerDialog`
 * and all inner parts receive the correct placement modifier classes.
 *
 * `placement`: bottom (default) | top | left | right.
 */
export const DrawerContent = defineComponent({
  name: 'DrawerContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Which screen edge the drawer slides from. @default 'bottom' */
    placement: { type: String as PropType<DrawerVariants['placement']>, default: 'bottom' }
  },
  setup (props, { attrs, slots }) {
    inject(DRAWER_CONTEXT, null) // consume parent to satisfy DI chain
    const placement = computed<DrawerPlacement>(() => props.placement ?? 'bottom')
    const styles = computed(() => drawerVariants({ placement: placement.value }))
    // Re-provide refined context so DrawerDialog and inner parts pick up placement.
    provide(DRAWER_CONTEXT, { slots: styles, placement })

    return () => (
      <div
        {...attrs}
        data-slot="drawer-content"
        data-placement={placement.value}
        class={cn(styles.value.content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerContent
