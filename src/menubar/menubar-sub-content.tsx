import { defineComponent, withDirectives } from 'vue'
import { MenubarSubContent as RekaMenubarSubContent, MenubarPortal } from 'reka-ui'
import { menuVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'
import type { HTMLAttributes, PropType } from 'vue'

/**
 * MenubarSubContent — the nested submenu popover surface (HeroUI `menu`).
 *
 * Rendered `asChild` so the data-attribute shim (`v-heroui-state`) bridges
 * reka-ui's `data-state`/`data-side` to HeroUI's
 * `data-entering`/`data-exiting`/`data-placement`.
 *
 * ⚠️  OVERLAY SHIM — DO NOT REMOVE the `asChild` + `withDirectives` pattern.
 */
export const MenubarSubContent = defineComponent({
  name: 'MenubarSubContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <MenubarPortal>
        <RekaMenubarSubContent asChild>
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
        </RekaMenubarSubContent>
      </MenubarPortal>
    )
  }
})

export default MenubarSubContent
