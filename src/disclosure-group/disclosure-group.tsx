import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { AccordionRoot as RekaAccordionRoot } from 'reka-ui'
import { disclosureGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * DisclosureGroupRoot — Vue port of HeroUI v3 `DisclosureGroup`.
 *
 * A container that coordinates multiple `Disclosure` children — supports
 * single (default) or multiple expand modes via `type`. Wraps reka-ui's
 * `AccordionRoot` so keyboard navigation and ARIA state are handled.
 *
 * `Disclosure` children remain canonical individual disclosures; this group
 * exists so consumers can coordinate them visually and behaviorally.
 */
export const DisclosureGroupRoot = defineComponent({
  name: 'DisclosureGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Selection mode. @default 'single' */
    type: { type: String as PropType<'single' | 'multiple'>, default: 'single' },
    /** Controlled value (id of expanded item, or array in 'multiple' mode). */
    modelValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    /** Default uncontrolled value. */
    defaultValue: { type: [String, Array] as PropType<string | string[]>, default: undefined },
    /** Whether the entire group is disabled. */
    isDisabled: { type: Boolean, default: false },
    /** Whether at least one item must remain expanded (single mode only). */
    isRequired: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup (props, { attrs, slots, emit }) {
    const styles = computed(() => disclosureGroupVariants({}))
    return () => (
      <RekaAccordionRoot
        {...attrs}
        data-slot="disclosure-group"
        class={cn(styles.value.base(), props.class)}
        type={props.type as 'single'}
        modelValue={props.modelValue as string}
        defaultValue={props.defaultValue as string}
        disabled={props.isDisabled}
        collapsible={!props.isRequired}
        onUpdate:modelValue={(v: string | string[] | undefined) => emit('update:modelValue', v)}
      >
        {slots.default?.()}
      </RekaAccordionRoot>
    )
  }
})

export default DisclosureGroupRoot
