import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { buttonGroupVariants, type ButtonGroupVariants, type ButtonVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { BUTTON_GROUP_CONTEXT } from './button-group-context'

/**
 * ButtonGroup — the surface container. Faithful Vue port of HeroUI v3 `ButtonGroup`.
 *
 * Computes HeroUI's `buttonGroupVariants` slot map and provides it to compound
 * parts (`ButtonGroup.Separator`) plus forwarded variant props to child Buttons.
 */
export const ButtonGroupRoot = defineComponent({
  name: 'ButtonGroup',
  inheritAttrs: false,
  props: {
    class:       { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Layout direction. @default 'horizontal' */
    orientation: { type: String as PropType<ButtonGroupVariants['orientation']>, default: 'horizontal' },
    /** Stretch the group to full container width. */
    fullWidth:   { type: Boolean as PropType<ButtonGroupVariants['fullWidth']>, default: false },
    /** Disabled state forwarded to child Buttons. */
    isDisabled:  { type: Boolean, default: false },
    /** Size forwarded to all child Buttons. */
    size:        { type: String as PropType<ButtonVariants['size']>, default: undefined },
    /** Variant forwarded to all child Buttons. */
    variant:     { type: String as PropType<ButtonVariants['variant']>, default: undefined },
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() =>
      buttonGroupVariants({ orientation: props.orientation, fullWidth: props.fullWidth })
    )

    provide(BUTTON_GROUP_CONTEXT, {
      slots:      styles,
      size:       computed(() => props.size),
      variant:    computed(() => props.variant),
      isDisabled: computed(() => props.isDisabled || undefined),
      fullWidth:  computed(() => props.fullWidth || undefined),
    })

    return () => (
      <div
        {...attrs}
        role="group"
        data-slot="button-group"
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </div>
    )
  }
})

export default ButtonGroupRoot
