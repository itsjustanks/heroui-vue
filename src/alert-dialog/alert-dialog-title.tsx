import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AlertDialogTitle as RekaAlertDialogTitle } from 'reka-ui'
import { cn } from '@/lib/utils'

/** AlertDialogTitle — HeroUI BEM: `alert-dialog__heading`. Dialog title text. */
export const AlertDialogTitle = defineComponent({
  name: 'AlertDialogTitle',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaAlertDialogTitle {...attrs} class={cn('alert-dialog__heading', props.class)}>
        {slots.default?.()}
      </RekaAlertDialogTitle>
    )
  }
})

export default AlertDialogTitle
