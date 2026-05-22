import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { Label as RekaLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * CheckboxGroupLabel — the group's heading. Mirrors the `Label` placed directly
 * inside HeroUI v3's `CheckboxGroup`.
 *
 * `text-sm font-medium`, matching `heroui/label`.
 */
export const CheckboxGroupLabel = defineComponent({
  name: 'CheckboxGroupLabel',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaLabel
        {...attrs}
        class={cn('text-sm font-medium leading-none text-foreground', props.class)}
      >
        {slots.default?.()}
      </RekaLabel>
    )
  }
})

export default CheckboxGroupLabel
