import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DialogTitle } from 'reka-ui'
import { cn } from '@/lib/utils'

/** DrawerHeading — the drawer title (HeroUI `drawer__heading`), wired as the dialog title. */
export const DrawerHeading = defineComponent({
  name: 'DrawerHeading',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <DialogTitle {...attrs} class={cn('align-middle text-base font-medium text-foreground', props.class)}>
        {slots.default?.()}
      </DialogTitle>
    )
  }
})

export default DrawerHeading
