import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { NumberFieldRoot, useForwardPropsEmits } from 'reka-ui'
import type { NumberFieldRootProps } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * NumberField — HeroUI-Vue number-field root (primitive library, net-new).
 *
 * Faithful port of HeroUI v3 `NumberField` over reka-ui `NumberFieldRoot`.
 * HeroUI's `NumberField` wraps React Aria's `NumberField`; `NumberFieldRoot` is
 * reka-ui's analogue — it owns the numeric model, `min`/`max`/`step`,
 * `formatOptions`, `locale`, wheel-change behaviour, and form association, and
 * shares them through context with the compound parts. Every `NumberFieldRoot`
 * prop/emit/`v-model` (`modelValue`, `min`, `max`, `step`, `stepSnapping`,
 * `formatOptions`, `locale`, `disabled`, `readonly`, `disableWheelChange`, …)
 * is forwarded.
 *
 * HeroUI's `number-field` BEM base is just a `flex flex-col gap-1` layout
 * wrapper; the bordered segmented surface lives in `NumberFieldGroup`.
 *
 * Compound API: `NumberField`, `NumberFieldGroup`, `NumberFieldInput`,
 * `NumberFieldIncrementButton`, `NumberFieldDecrementButton` — mirrors HeroUI's
 * `NumberField.*` parts.
 */
export const NumberField = defineComponent({
  name: 'NumberFieldView',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI `fullWidth` — stretch the field to fill its container. */
    fullWidth: { type: Boolean, default: false }
  },
  // reka-ui `NumberFieldRoot` emits — declared as a string array so
  // `defineComponent`'s overload resolves and `useForwardPropsEmits` forwards.
  emits: ['update:modelValue'],
  setup (props, { attrs, emit, slots }) {
    const forwarded = useForwardPropsEmits(attrs as NumberFieldRootProps, emit)
    return () => (
      <NumberFieldRoot
        {...forwarded.value}
        data-slot="number-field"
        class={cn('flex flex-col gap-1.5', props.fullWidth && 'w-full', props.class)}
      >
        {{
          // reka-ui `NumberFieldRoot` exposes `modelValue` / `textValue` — surface
          // them so consumers can drive a render-prop child, matching HeroUI.
          default: (slotProps: Record<string, unknown>) => slots.default?.(slotProps)
        }}
      </NumberFieldRoot>
    )
  }
})

export default NumberField
