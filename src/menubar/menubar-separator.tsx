import { defineComponent } from 'vue'
import { MenubarSeparator as RekaMenubarSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/** MenubarSeparator — a quiet divider between menu groups (HeroUI `separator`). */
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
        data-slot="separator"
        class={cn('separator', props.class)}
      />
    )
  }
})

export default MenubarSeparator
