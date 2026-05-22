import { defineComponent } from 'vue'
import { MenubarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * Menubar — root of the HeroUI-Vue menubar.
 *
 * A faithful HeroUI v3 menubar for Vue, over reka-ui `MenubarRoot` (headless
 * behaviour). The horizontal bar shares the dropdown's menu surface +
 * menu-item styling. Forwards all props/emits via `{...attrs}`.
 */
export const Menubar = defineComponent({
  name: 'Menubar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <MenubarRoot
        {...attrs}
        class={cn(
          'flex h-10 items-center gap-x-1 rounded-lg border border-border bg-background p-1',
          props.class
        )}
      >
        {slots.default?.()}
      </MenubarRoot>
    )
  }
})

export default Menubar
