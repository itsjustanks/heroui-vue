import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDescription — HeroUI BEM: `alert__description`. Muted body text. */
export const AlertDescription = defineComponent({
  name: 'AlertDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('alert__description', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDescription
