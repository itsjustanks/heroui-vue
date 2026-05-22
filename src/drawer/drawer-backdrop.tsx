import { computed, defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogOverlay, DialogPortal } from 'reka-ui'
import { drawerVariants, type DrawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * DrawerBackdrop — the dim overlay layer (HeroUI `drawer__backdrop`). Portals the
 * drawer and renders the backdrop as a sibling of DrawerContent.
 *
 * `variant` re-calls `drawerVariants({ variant })` so the correct backdrop
 * modifier class is applied, mirroring React's DrawerBackdrop slot merge.
 *
 * OVERLAY SHIM: Rendered `asChild` so `vHerouiState` binds the real element
 * and derives `data-entering`/`data-exiting` from reka-ui's `data-state`.
 * Do NOT remove `withDirectives` — `drawer.css` keys backdrop fade off it.
 */
export const DrawerBackdrop = defineComponent({
  name: 'DrawerBackdrop',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Backdrop visual variant. @default 'opaque' */
    variant: { type: String as PropType<DrawerVariants['variant']>, default: 'opaque' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => drawerVariants({ variant: props.variant }))
    return () => (
      <DialogPortal>
        <DialogOverlay asChild>
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="drawer-backdrop"
                class={cn(styles.value.backdrop(), props.class)}
              />
            ),
            [[vHerouiState]]
          )}
        </DialogOverlay>
        {slots.default?.()}
      </DialogPortal>
    )
  }
})

export default DrawerBackdrop
