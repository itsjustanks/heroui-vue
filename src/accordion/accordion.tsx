import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { AccordionRoot as RekaAccordionRoot } from 'reka-ui'
import { accordionVariants, type AccordionVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { ACCORDION_CONTEXT } from './accordion-context'

/**
 * AccordionRoot — Vue port of HeroUI v3 `AccordionRoot` (wraps DisclosureGroup).
 *
 * Computes `accordionVariants` and provides the slot map to child items.
 * Renders `data-slot="accordion"` on the reka-ui AccordionRoot.
 */
export const AccordionRoot = defineComponent({
  name: 'Accordion',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Visual variant. */
    variant: { type: String as PropType<AccordionVariants['variant']>, default: undefined },
    /** Hide separator between items. */
    hideSeparator: { type: Boolean, default: false },
    /** Selection mode. @default 'single' (matches HeroUI v3 React) */
    type: { type: String as PropType<'single' | 'multiple'>, default: 'single' },
    /** Allow closing the open item in `single` mode. @default true */
    collapsible: { type: Boolean, default: true },
    /** Default expanded item(s) for uncontrolled use. */
    defaultValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    /** Controlled value. */
    modelValue: { type: [String, Array] as PropType<string | string[]>, default: undefined }
  },
  emits: ['update:modelValue'],
  setup (props, { attrs, slots, emit }) {
    const styles = computed(() => accordionVariants({ variant: props.variant }))
    provide(ACCORDION_CONTEXT, { slots: styles, hideSeparator: computed(() => props.hideSeparator) })

    return () => (
      <RekaAccordionRoot
        {...(attrs as Record<string, any>)}
        type={props.type as any}
        collapsible={props.collapsible}
        defaultValue={props.defaultValue as any}
        modelValue={props.modelValue as any}
        onUpdate:modelValue={(v: any) => emit('update:modelValue', v)}
        data-slot="accordion"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaAccordionRoot>
    )
  }
})

export default AccordionRoot
