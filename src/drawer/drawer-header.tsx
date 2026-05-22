import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerHeader — the top section (HeroUI `drawer__header`). */
export const DrawerHeader = defineComponent({
  name: 'DrawerHeader',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="drawer-header"
        class={cn((ctx?.slots.value ?? drawerVariants()).header(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerHeader
