import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerBody — the scrollable content area (HeroUI `drawer__body`). */
export const DrawerBody = defineComponent({
  name: 'DrawerBody',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="drawer-body"
        style={{ touchAction: 'pan-y' }}
        class={cn((ctx?.slots.value ?? drawerVariants()).body(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerBody
