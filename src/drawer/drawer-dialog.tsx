import { computed, defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { DRAWER_PLACEMENT_KEY, type TDrawerPlacement } from './drawer-content'

/** Per-placement BEM modifier classes for the dialog panel. */
const PLACEMENT_CLASS: Record<TDrawerPlacement, string> = {
  bottom: 'drawer__dialog--bottom',
  top: 'drawer__dialog--top',
  left: 'drawer__dialog--left',
  right: 'drawer__dialog--right'
}

/**
 * DrawerDialog — the sliding panel (HeroUI `drawer__dialog`). The focus-trapped
 * `role=dialog` element (reka-ui `DialogContent`); sizing, edge rounding and
 * slide direction follow the `placement` provided by `DrawerContent`.
 *
 * Rendered `as-child` so the data-attribute shim (`v-heroui-state`) binds the
 * real element. `drawer.css` slides the panel via a CSS *transition* keyed off
 * `data-entering`/`data-exiting` on the `.drawer__content` wrapper — so the
 * shim is given `{ ancestor }` to mirror those onto it, and pins the dialog
 * mounted for the slide-out duration so the exit can play.
 */
export const DrawerDialog = defineComponent({
  name: 'DrawerDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const placement = inject(DRAWER_PLACEMENT_KEY, computed<TDrawerPlacement>(() => 'bottom'))
    return () => (
      <RekaDialogContent asChild>
        {withDirectives(
          (
            <div
              {...attrs}
              class={cn(
                'drawer__dialog',
                PLACEMENT_CLASS[placement.value],
                props.class
              )}
            >
              {slots.default?.()}
            </div>
          ),
          [[vHerouiState, { ancestor: '.drawer__content' }]]
        )}
      </RekaDialogContent>
    )
  }
})

export default DrawerDialog
