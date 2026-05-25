import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionItem as RekaAccordionItem } from 'reka-ui'
import { accordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_CONTEXT } from './accordion-context'
import { ACCORDION_ITEM_CONTEXT } from './accordion-item-context'

/**
 * AccordionItem — Vue port of HeroUI v3 `AccordionItem` (wraps Disclosure).
 *
 * Re-uses the root `accordionVariants` slot map from context (consistent with
 * how HeroUI React shares slots across the tree) and provides it downward.
 * Renders `data-slot="accordion-item"` on the reka-ui AccordionItem.
 */
/** Per-mount counter — used to mint stable fallback values when callers
 *  rely on React's `key={index}` instead of passing `value` explicitly. */
let autoValueId = 0

export const AccordionItem = defineComponent({
  name: 'AccordionItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Unique value identifying this item within the accordion. Accepts
     *  `string | number`. If omitted, an auto-id is minted so callers using
     *  React-style `key={index}` (which Vue does NOT forward as a value) still
     *  get a working item. */
    value: { type: [String, Number] as PropType<string | number>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const rootCtx = inject(ACCORDION_CONTEXT, null)
    const styles = computed(() => rootCtx?.slots.value ?? accordionVariants())
    const hideSeparator = computed(() => rootCtx?.hideSeparator.value ?? false)
    const autoValue = `accordion-item-${++autoValueId}`

    provide(ACCORDION_ITEM_CONTEXT, { slots: styles })

    return () => {
      const resolvedValue = props.value !== undefined ? String(props.value) : autoValue
      return (
        <RekaAccordionItem
          {...(attrs as Record<string, any>)}
          value={resolvedValue}
          data-slot="accordion-item"
          data-hide-separator={hideSeparator.value ? 'true' : undefined}
          class={cn(styles.value.item(), props.class)}
        >
          {slots.default?.()}
        </RekaAccordionItem>
      )
    }
  }
})

export default AccordionItem
