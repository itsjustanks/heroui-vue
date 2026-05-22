import { defineComponent, provide } from 'vue'
import { MenubarRoot as RekaMenubarRoot } from 'reka-ui'
import type { HTMLAttributes, PropType } from 'vue'
import { cn } from '@/lib/utils'
import { MENUBAR_CONTEXT } from './menubar-context'

/**
 * MenubarRoot — the horizontal application menu bar.
 *
 * Provides `MENUBAR_CONTEXT` so compound parts can share state. Wraps reka-ui
 * `MenubarRoot` (headless behaviour) and applies the HeroUI bar chrome.
 */
export const MenubarRoot = defineComponent({
  name: 'Menubar',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    provide(MENUBAR_CONTEXT, {})

    return () => (
      <RekaMenubarRoot
        {...attrs}
        data-slot="menubar"
        class={cn(
          'flex h-10 items-center gap-x-1 rounded-lg border border-border bg-background p-1',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaMenubarRoot>
    )
  }
})

export default MenubarRoot
