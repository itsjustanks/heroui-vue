import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectValue as RekaSelectValue } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * SelectValue — renders the selected item's text inside the trigger.
 *
 * Emits HeroUI BEM class `select__value`. Placeholder state is styled via
 * `select__value[data-placeholder="true"]` in `select.css`.
 */
export const SelectValue = defineComponent({
  name: 'SelectValue',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectValue {...attrs} class={cn('select__value', props.class)}>
        {slots.default?.()}
      </RekaSelectValue>
    )
  }
})

export default SelectValue
