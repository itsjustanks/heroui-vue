import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { MenubarCheckboxItem as RekaMenubarCheckboxItem } from 'reka-ui'
import type { CheckboxCheckedState as CheckedState } from 'reka-ui'
import { menuItemVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * MenubarCheckboxItem — HeroUI `menu-item` with a leading checkmark indicator.
 *
 * BUG FIX: reka-ui `MenubarCheckboxItem` expects `modelValue: CheckedState`,
 * NOT a `checked` prop. This component uses `modelValue` (and `v-model`-compatible
 * `onUpdate:modelValue` emit) to avoid the type error.
 *
 * The indicator span is always present in the DOM (matching HeroUI React's
 * structure); `data-visible` animates the checkmark into view.
 */
export const MenubarCheckboxItem = defineComponent({
  name: 'MenubarCheckboxItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** The controlled checked state. Bindable with `v-model`. */
    modelValue: { type: [Boolean, String] as PropType<CheckedState>, default: false }
  },
  emits: ['update:modelValue'],
  setup (props, { attrs, slots, emit }) {
    const styles = computed(() => menuItemVariants())
    const isChecked = computed(() => props.modelValue === true)

    return () => (
      <RekaMenubarCheckboxItem
        {...attrs}
        modelValue={props.modelValue}
        onUpdate:modelValue={(val: CheckedState) => emit('update:modelValue', val)}
        data-slot="menu-item"
        class={cn(styles.value.item(), props.class)}
      >
        <span
          aria-hidden="true"
          class={styles.value.indicator()}
          data-slot="menu-item-indicator"
          data-type="checkmark"
          data-visible={isChecked.value || undefined}
        >
          <svg
            aria-hidden="true"
            data-slot="menu-item-indicator--checkmark"
            fill="none"
            role="presentation"
            stroke="currentColor"
            stroke-dasharray={22}
            stroke-dashoffset={isChecked.value ? 44 : 66}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            viewBox="0 0 17 18"
          >
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </span>
        {slots.default?.()}
      </RekaMenubarCheckboxItem>
    )
  }
})

export default MenubarCheckboxItem
