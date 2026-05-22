import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

/** AlertDescription — the alert body text (HeroUI `alert__description`): muted, `text-sm`. */
export const AlertDescription = defineComponent({
  name: 'AlertDescription',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <div {...attrs} class={cn('text-sm [&_p]:leading-relaxed', props.class)}>
        {slots.default?.()}
      </div>
    )
  }
})

export default AlertDescription
