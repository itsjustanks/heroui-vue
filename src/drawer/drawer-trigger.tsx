import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogTrigger as RekaDialogTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

/** DrawerTrigger — opens the drawer. Pass `as-child` to use a custom element. */
export const DrawerTrigger = defineComponent({
  name: 'DrawerTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => <RekaDialogTrigger {...attrs} class={cn('drawer__trigger', props.class)}>{slots.default?.()}</RekaDialogTrigger>
  }
})

export default DrawerTrigger
