import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSeparator as RekaDropdownMenuSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * DropdownMenuSeparator — a quiet divider between menu groups, inset to sit
 * inside the HeroUI `dropdown__menu` padding.
 */
export const DropdownMenuSeparator = defineComponent({
  name: 'DropdownMenuSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaDropdownMenuSeparator
        {...attrs}
        data-slot="separator"
        class={cn('separator', props.class)}
      />
    )
  }
})

export default DropdownMenuSeparator
