import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Label as RekaLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Label — HeroUI-Vue primitive over reka-ui `Label`.
 *
 * HeroUI `label.css`: `text-sm font-medium text-foreground`. Disabled/invalid
 * styling is driven by reka-ui peer state; tokens adapted to the repo
 * (`text-foreground`). Faithful HeroUI v3 port.
 */
export const Label = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names -- the HeroUI/shadcn component is named Label
  name: 'Label',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaLabel
        {...attrs}
        class={cn(
          'text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaLabel>
    )
  }
})

export default Label
