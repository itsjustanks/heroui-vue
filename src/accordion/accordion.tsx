import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * Accordion — root of the HeroUI-Vue accordion (primitive library).
 *
 * HeroUI BEM: `accordion` base, `accordion--surface` variant modifier.
 * Forwards all props/emits (`type`, `collapsible`, `modelValue`,
 * `defaultValue`, `onUpdate:modelValue`, `disabled`, …) to reka-ui.
 */
export const Accordion = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    variant: { type: String as PropType<'default' | 'surface'>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <AccordionRoot
        {...attrs}
        class={cn(
          'accordion',
          props.variant === 'surface' && 'accordion--surface',
          props.class
        )}
      >
        {slots.default?.()}
      </AccordionRoot>
    )
  }
})

export default Accordion
