import { computed, defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { cn } from '@/lib/utils'
import { DRAWER_PLACEMENT_KEY, type TDrawerPlacement } from './drawer-content'

/** Per-placement panel sizing, edge rounding/border, and slide animation. */
const PLACEMENT_CLASS: Record<TDrawerPlacement, string> = {
  bottom: 'w-full max-h-[85vh] rounded-t-2xl border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
  top: 'w-full max-h-[85vh] rounded-b-2xl border-b data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
  left: 'h-full w-80 max-w-[85vw] border-r sm:w-96 data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
  right: 'h-full w-80 max-w-[85vw] border-l sm:w-96 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right'
}

/**
 * DrawerDialog — the sliding panel (HeroUI `drawer__dialog`). The focus-trapped
 * `role=dialog` element (reka-ui `DialogContent`); sizing, edge rounding and
 * slide direction follow the `placement` provided by `DrawerContent`.
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
      <RekaDialogContent
        {...attrs}
        class={cn(
          'pointer-events-auto relative flex flex-col gap-4 border-border bg-background p-6 text-foreground shadow-lg outline-none',
          'data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:animate-out data-[state=closed]:duration-200',
          PLACEMENT_CLASS[placement.value],
          props.class
        )}
      >
        {slots.default?.()}
      </RekaDialogContent>
    )
  }
})

export default DrawerDialog
