import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerFooter — the bottom action row (HeroUI `drawer__footer`): end-aligned actions. */
export const DrawerFooter = defineComponent({
  name: 'DrawerFooter',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="drawer-footer"
        class={cn((ctx?.slots.value ?? drawerVariants()).footer(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default DrawerFooter
