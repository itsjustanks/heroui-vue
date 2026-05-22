import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { SelectIcon, SelectTrigger as RekaSelectTrigger } from 'reka-ui'
import { IconChevronDown } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * SelectTrigger — HeroUI `select__trigger` + `select__indicator`.
 *
 * Emits HeroUI v3 BEM class names from `select.css`. Interactive states
 * (hover, focus-visible, invalid, disabled) are handled by the CSS via native
 * pseudo-classes and data-attributes from reka-ui.
 */
export const SelectTrigger = defineComponent({
  name: 'SelectTrigger',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaSelectTrigger
        {...attrs}
        class={cn('select__trigger', props.class)}
      >
        {slots.default?.()}
        <SelectIcon as-child>
          <IconChevronDown class="select__indicator" data-slot="select-default-indicator" />
        </SelectIcon>
      </RekaSelectTrigger>
    )
  }
})

export default SelectTrigger
