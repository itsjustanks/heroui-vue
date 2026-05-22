import { computed, defineComponent, inject, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import { DRAWER_CONTEXT, type DrawerPlacement } from './drawer-context'

/**
 * DrawerDialog — the sliding panel (HeroUI `drawer__dialog`). The focus-trapped
 * `role=dialog` element (reka-ui `DialogContent`). Placement and slot classes
 * are read from the `DrawerContent`-provided context.
 *
 * OVERLAY SHIM: Rendered `asChild` with `vHerouiState({ ancestor: '.drawer__content' })`
 * so `data-entering`/`data-exiting` are mirrored onto the content wrapper,
 * enabling the CSS slide entry/exit animation to play out fully.
 * Do NOT remove `withDirectives` or the `ancestor` option.
 */
export const DrawerDialog = defineComponent({
  name: 'DrawerDialog',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    const placement = computed<DrawerPlacement>(() => ctx?.placement.value ?? 'bottom')
    const styles = computed(() => ctx?.slots.value ?? drawerVariants({ placement: placement.value }))
    return () => (
      <RekaDialogContent asChild>
        {withDirectives(
          (
            <div
              {...attrs}
              data-slot="drawer-dialog"
              data-placement={placement.value}
              style={{ touchAction: 'none' }}
              class={cn(styles.value.dialog(), props.class)}
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
