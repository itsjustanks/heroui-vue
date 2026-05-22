import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerHandle — the visual drag-handle bar (HeroUI `drawer__handle`), for edge drawers. */
export const DrawerHandle = defineComponent({
  name: 'DrawerHandle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        aria-hidden="true"
        data-slot="drawer-handle"
        class={cn((ctx?.slots.value ?? drawerVariants()).handle(), props.class)}
      >
        <div data-slot="drawer-handle-bar" />
      </div>
    )
  }
})

export default DrawerHandle
