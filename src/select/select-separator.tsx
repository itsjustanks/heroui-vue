import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectSeparator as RekaSelectSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'

/** SelectSeparator — a quiet divider between groups inside the listbox. */
export const SelectSeparator = defineComponent({
  name: 'SelectSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaSelectSeparator {...attrs} class={cn('separator separator--horizontal separator--default', props.class)} />
    )
  }
})

export default SelectSeparator
