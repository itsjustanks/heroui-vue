import { computed, defineComponent, inject, provide, type HTMLAttributes, type PropType } from 'vue'
import { SwitchRoot as RekaSwitchRoot, SwitchThumb as RekaSwitchThumb } from 'reka-ui'
import { switchVariants, type SwitchVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SWITCH_CONTEXT } from './switch-context'

/* -------------------------------------------------------------------------------------------------
 * SwitchRoot — the interactive toggle element. Faithful Vue port of HeroUI v3 `Switch`.
 *
 * Computes HeroUI's `switchVariants` slot map and provides it to compound parts
 * (`Switch.Control`, `Switch.Thumb`, `Switch.Icon`, `Switch.Content`) via context.
 * Delegates behaviour to reka-ui `SwitchRoot`.
 * -----------------------------------------------------------------------------------------------*/
export const SwitchRoot = defineComponent({
  name: 'Switch',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Switch size — `switch--{size}`. @default 'md' */
    size: { type: String as PropType<SwitchVariants['size']>, default: 'md' }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => switchVariants({ size: props.size }))
    provide(SWITCH_CONTEXT, { slots: styles })

    return () => (
      <RekaSwitchRoot
        as="label"
        {...attrs}
        data-slot="switch"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </RekaSwitchRoot>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * SwitchControl — the track/pill that contains the thumb (HeroUI `switch__control`).
 * -----------------------------------------------------------------------------------------------*/
export const SwitchControl = defineComponent({
  name: 'SwitchControl',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SWITCH_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="switch-control"
        class={cn((ctx?.slots.value ?? switchVariants()).control(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * SwitchThumb — the moving circle inside the control (HeroUI `switch__thumb`).
 * Delegates to reka-ui `SwitchThumb` for aria-checked state management.
 * -----------------------------------------------------------------------------------------------*/
export const SwitchThumb = defineComponent({
  name: 'SwitchThumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SWITCH_CONTEXT, null)
    return () => (
      <RekaSwitchThumb
        {...attrs}
        data-slot="switch-thumb"
        class={cn((ctx?.slots.value ?? switchVariants()).thumb(), props.class)}
      >
        {slots.default?.()}
      </RekaSwitchThumb>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * SwitchIcon — optional decorative icon inside the control (HeroUI `switch__icon`).
 * -----------------------------------------------------------------------------------------------*/
export const SwitchIcon = defineComponent({
  name: 'SwitchIcon',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SWITCH_CONTEXT, null)
    return () => (
      <span
        {...attrs}
        data-slot="switch-icon"
        class={cn((ctx?.slots.value ?? switchVariants()).icon(), props.class)}
      >
        {slots.default?.()}
      </span>
    )
  }
})

/* -------------------------------------------------------------------------------------------------
 * SwitchContent — the label/description area beside the control (HeroUI `switch__content`).
 * -----------------------------------------------------------------------------------------------*/
export const SwitchContent = defineComponent({
  name: 'SwitchContent',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const ctx = inject(SWITCH_CONTEXT, null)
    return () => (
      <div
        {...attrs}
        data-slot="switch-content"
        class={cn((ctx?.slots.value ?? switchVariants()).content(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default SwitchRoot
