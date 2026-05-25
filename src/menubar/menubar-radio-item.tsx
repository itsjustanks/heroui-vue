import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { MenubarRadioItem as RekaMenubarRadioItem } from 'reka-ui'
import { menuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

let autoValueId = 0

/**
 * MenubarRadioItem — HeroUI `menu-item` with a leading dot indicator.
 *
 * Accepts `value: string | number`. When omitted, mints a stable per-mount
 * auto-id so React-style `<MenubarRadioItem key={index}>` from ported demos
 * works without an explicit value (Vue does not forward `key` as a prop).
 */
export const MenubarRadioItem = defineComponent({
  name: 'MenubarRadioItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Unique value matched against `MenubarRadioGroup`'s `modelValue`. */
    value: { type: [String, Number] as PropType<string | number>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = menuItemVariants()
    const autoValue = `menubar-radio-item-${++autoValueId}`

    return () => (
      <RekaMenubarRadioItem
        {...attrs}
        value={props.value !== undefined ? String(props.value) : autoValue}
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
