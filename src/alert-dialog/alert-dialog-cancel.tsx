import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogCancel as RekaAlertDialogCancel } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/button'

/** AlertDialogCancel — the dismiss button: styled with the outline button variant. */
export const AlertDialogCancel = defineComponent({
  name: 'AlertDialogCancel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogCancel {...attrs} class={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogCancel>
    )
  }
})

export default AlertDialogCancel
