import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuGroup as RekaDropdownMenuGroup } from 'reka-ui'
import { menuSectionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * DropdownSection — a labelled group of items (HeroUI `menu-section`).
 *
 * Wraps reka-ui `DropdownMenuGroup` for accessibility grouping semantics.
 */
export const DropdownSection = defineComponent({
  name: 'DropdownSection',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuGroup
        {...attrs}
        data-slot="menu-section"
        class={cn(menuSectionVariants(), props.class)}
      >
        {slots.default?.()}
      </RekaDropdownMenuGroup>
    )
  }
})

export default DropdownSection
