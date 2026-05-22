import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerTrigger — opens the drawer (HeroUI `drawer__trigger`). Pass `asChild` to use a custom element. */
export const DrawerTrigger = defineComponent({
  name: 'DrawerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <RekaDialogTrigger
        {...attrs}
        data-slot="drawer-trigger"
        class={cn((ctx?.slots.value ?? drawerVariants()).trigger(), props.class)}
      >
        {slots.default?.()}
      </RekaDialogTrigger>
    )
  }
})

export default DrawerTrigger
