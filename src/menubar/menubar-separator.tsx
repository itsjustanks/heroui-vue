import { defineComponent } from 'vue'
import { MenubarSeparator as RekaMenubarSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarSeparator — a quiet divider between menu groups, inset to sit inside
 * the HeroUI `menu` padding.
 */
export const MenubarSeparator = defineComponent({
  name: 'MenubarSeparator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs }) {
    return () => (
      <RekaMenubarSeparator
        {...attrs}
        class={cn('my-1 ml-[3%] h-px w-[94%] bg-border', props.class)}
      />
    )
  }
})

export default MenubarSeparator
