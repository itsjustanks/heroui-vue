import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogAction as RekaAlertDialogAction } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/** AlertDialogAction — the confirm button: styled with the primary button variant. */
export const AlertDialogAction = defineComponent({
  name: 'AlertDialogAction',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogAction {...attrs} class={cn(buttonVariants(), props.class)}>
        {slots.default?.()}
      </RekaAlertDialogAction>
    )
  }
})

export default AlertDialogAction
