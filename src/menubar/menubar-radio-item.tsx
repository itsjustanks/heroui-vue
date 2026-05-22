import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { MenubarRadioItem as RekaMenubarRadioItem } from 'reka-ui'
import { menuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * MenubarRadioItem — HeroUI `menu-item` with a leading dot indicator.
 *
 * The indicator span is always present in the DOM; HeroUI CSS targets
 * `[data-state="checked"] [data-slot="menu-item-indicator"]` to show/hide it.
 *
 * @prop value — required by reka-ui for the parent `MenubarRadioGroup`.
 */
export const MenubarRadioItem = defineComponent({
  name: 'MenubarRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Unique value matched against `MenubarRadioGroup`'s `modelValue`. */
    value: { type: String, required: true }
  },
  setup (props, { attrs, slots }) {
    const styles = menuItemVariants()

    return () => (
      <RekaMenubarRadioItem
        {...attrs}
        value={props.value}
        data-slot="menu-item"
        class={cn(styles.item(), props.class)}
      >
        <span
          aria-hidden="true"
          class={styles.indicator()}
          data-slot="menu-item-indicator"
          data-type="dot"
        >
          <svg
            aria-hidden="true"
            data-slot="menu-item-indicator--dot"
            fill="currentColor"
            fill-rule="evenodd"
            role="presentation"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill-rule="evenodd" />
          </svg>
        </span>
        {slots.default?.()}
      </RekaMenubarRadioItem>
    )
  }
})

export default MenubarRadioItem
