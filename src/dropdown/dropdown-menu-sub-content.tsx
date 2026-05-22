import { defineComponent, withDirectives, type HTMLAttributes, type PropType } from 'vue'
import { DropdownMenuSubContent as RekaDropdownMenuSubContent } from 'reka-ui'
import { cn } from '@/lib/utils'
import { vHerouiState } from '@/composables/use-heroui-state'

/**
 * DropdownMenuSubContent — the nested submenu popover; same surface as the root
 * menu. Rendered `as-child` so the data-attribute shim (`v-heroui-state`)
 * bridges reka-ui's `data-state`/`data-side` to HeroUI's
 * `data-entering`/`data-exiting`/`data-placement`.
 */
export const DropdownMenuSubContent = defineComponent({
  name: 'DropdownMenuSubContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaDropdownMenuSubContent asChild>
        {withDirectives(
          (
            <div {...attrs} class={cn('dropdown__popover', props.class)}>
              <div data-slot="dropdown-menu" class="dropdown__menu">
                {slots.default?.()}
              </div>
            </div>
          ),
          [[vHerouiState]]
        )}
      </RekaDropdownMenuSubContent>
    )
  }
})

export default DropdownMenuSubContent
