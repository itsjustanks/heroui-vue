import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogTitle } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerHeading — the drawer title (HeroUI `drawer__heading`), wired as the reka-ui dialog title. */
export const DrawerHeading = defineComponent({
  name: 'DrawerHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <DialogTitle
        {...attrs}
        data-slot="drawer-heading"
        class={cn((ctx?.slots.value ?? drawerVariants()).heading(), props.class)}
      >
        {slots.default?.()}
      </DialogTitle>
    )
  }
})

export default DrawerHeading
