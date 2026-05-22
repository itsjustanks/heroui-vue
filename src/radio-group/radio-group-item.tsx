import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { RadioGroupItem as RekaRadioGroupItem } from 'reka-ui'
import { radioVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { RADIO_CONTEXT } from './radio-context'

/* -------------------------------------------------------------------------------------------------
 * RadioRoot — one radio button within a `RadioGroup`.
 * Faithful Vue port of HeroUI v3 `Radio` over reka-ui `RadioGroupItem`.
 *
 * Computes HeroUI's `radioVariants` slot map and provides it to compound parts
 * (`Radio.Control`, `Radio.Indicator`, `Radio.Content`). All reka-ui `RadioGroupItem`
 * props (`value`, `disabled`, `id`, …) forward through `{...attrs}`.
 * -----------------------------------------------------------------------------------------------*/
export const RadioRoot = defineComponent({
  name: 'Radio',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => radioVariants())
    provide(RADIO_CONTEXT, { slots: styles })

    return () => (
      <RekaRadioGroupItem
        {...attrs}
        data-slot="radio"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaRadioGroupItem>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * RadioControl — the circular control box (HeroUI `radio__control`).
 * -----------------------------------------------------------------------------------------------*/
export const RadioControl = defineComponent({
  name: 'RadioControl',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RADIO_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="radio-control"
        class={cn((ctx?.slots.value ?? radioVariants()).control(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * RadioIndicator — the filled dot inside the control (HeroUI `radio__indicator`).
 * -----------------------------------------------------------------------------------------------*/
export const RadioIndicator = defineComponent({
  name: 'RadioIndicator',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RADIO_CONTEXT, null)
    return () => (
      <span
        aria-hidden="true"
        {...attrs}
        data-slot="radio-indicator"
        class={cn((ctx?.slots.value ?? radioVariants()).indicator(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * RadioContent — the label/description area beside the control (HeroUI `radio__content`).
 * -----------------------------------------------------------------------------------------------*/
export const RadioContent = defineComponent({
  name: 'RadioContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(RADIO_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="radio-content"
        class={cn((ctx?.slots.value ?? radioVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default RadioRoot
