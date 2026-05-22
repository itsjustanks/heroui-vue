import { defineComponent } from 'vue'
import { AccordionRoot } from 'reka-ui'

/**
 * Accordion — root of the HeroUI-Vue accordion (primitive library).
 *
 * Thin wrapper over reka-ui `AccordionRoot` — logic only, renders no DOM.
 * Forwards all props/emits (`type`, `collapsible`, `modelValue`,
 * `defaultValue`, `onUpdate:modelValue`, `disabled`, …).
 */
export const Accordion = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  setup (_props, { attrs, slots }) {
    return () => <AccordionRoot {...attrs}>{slots.default?.()}</AccordionRoot>
  }
})

export default Accordion
