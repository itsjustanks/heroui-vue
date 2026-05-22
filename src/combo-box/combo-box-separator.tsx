import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { ComboboxSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * ComboBoxSeparator — a divider between ComboBox groups. Mirrors the generic
 * `Separator` used inside HeroUI v3's `ComboBox.Popover`.
 */
export const ComboBoxSeparator = defineComponent({
  name: 'ComboBoxSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <ComboboxSeparator
        {...attrs}
        class={cn('my-1 ml-[3%] h-px w-[94%] shrink-0 bg-border', props.class)}
      />
    )
  }
})

export default ComboBoxSeparator
