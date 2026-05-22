import { defineComponent, withDirectives } from 'vue'
import { MenubarContent as RekaMenubarContent, MenubarPortal } from 'reka-ui'
import { menuVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarContent — the popover surface for a menubar menu (HeroUI `menu`).
 *
 * Rendered `asChild` so the data-attribute shim (`v-heroui-state`) binds the
 * real overlay element, bridging reka-ui's `data-state`/`data-side` to
 * HeroUI's `data-entering`/`data-exiting`/`data-placement`.
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE the `asChild` + `withDirectives` pattern.
 */
export const MenubarContent = defineComponent({
  name: 'MenubarContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    align: { type: String as PropType<'start' | 'center' | 'end'>, default: 'start' },
    alignOffset: { type: Number, default: -4 },
    sideOffset: { type: Number, default: 8 }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <MenubarPortal>
        <RekaMenubarContent
          align={props.align}
          alignOffset={props.alignOffset}
          sideOffset={props.sideOffset}
          asChild
        >
          {withDirectives(
            (
              <div
                {...attrs}
                data-slot="menu"
                class={cn(menuVariants(), props.class)}
              >
                {slots.default?.()}
              </div>
            ),
            [[vHerouiState]]
          )}
        </RekaMenubarContent>
      </MenubarPortal>
    )
  }
})

export default MenubarContent
