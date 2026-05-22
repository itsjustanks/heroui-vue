import { defineComponent, inject, type HTMLAttributes, type PropType } from 'vue'
import { DialogClose } from 'reka-ui'
import { drawerVariants } from '@heroui/styles'
import { IconX } from '@/icons'
import { cn } from '@/lib/utils'
import { DRAWER_CONTEXT } from './drawer-context'

/** DrawerCloseTrigger — the corner close button (HeroUI `drawer__close-trigger`). */
export const DrawerCloseTrigger = defineComponent({
  name: 'DrawerCloseTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(DRAWER_CONTEXT, null)
    return () => (
      <DialogClose
        {...attrs}
        aria-label="Close"
        data-slot="drawer-close-trigger"
        class={cn((ctx?.slots.value ?? drawerVariants()).closeTrigger(), props.class)}
      >
        {slots.default?.() ?? <IconX class="size-4" />}
      </DialogClose>
    )
  }
})

export default DrawerCloseTrigger
