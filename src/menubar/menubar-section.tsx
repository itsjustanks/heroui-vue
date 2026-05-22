import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { MenubarGroup as RekaMenubarGroup } from 'reka-ui'
import { menuSectionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * MenubarSection — a labelled group of items (HeroUI `menu-section`).
 *
 * Wraps reka-ui `MenubarGroup` for accessibility grouping semantics and applies
 * `menuSectionVariants()` to match HeroUI React's `Menu.Section`.
 */
export const MenubarSection = defineComponent({
  name: 'MenubarSection',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaMenubarGroup
        {...attrs}
        data-slot="menu-section"
        class={cn(menuSectionVariants(), props.class)}
      >
        {slots.default?.()}
      </RekaMenubarGroup>
    )
  }
})

export default MenubarSection
