import { computed, defineComponent, provide, type HTMLAttributes, type PropType } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { switchGroupVariants, type SwitchGroupVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'
import { SWITCH_GROUP_CONTEXT } from './switch-group-context'

/**
 * SwitchGroupRoot — layout container for related `Switch` controls.
 * Faithful Vue port of HeroUI v3 `SwitchGroupRoot`.
 *
 * HeroUI v3 ships only `SwitchGroupRoot` — there is no `Items` part. Switches
 * are placed directly inside the group.
 */
export const SwitchGroupRoot = defineComponent({
  name: 'SwitchGroup',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    as: { type: [String, Object, Function] as PropType<PrimitiveProps['as']>, default: 'div' },
    asChild: { type: Boolean as PropType<PrimitiveProps['asChild']>, default: undefined },
    /** Layout orientation. @default 'vertical' */
    orientation: { type: String as PropType<SwitchGroupVariants['orientation']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const styles = computed(() => switchGroupVariants({ orientation: props.orientation }))
    provide(SWITCH_GROUP_CONTEXT, {
      orientation: computed(() => props.orientation),
      slots: styles
    })

    return () => (
      <Primitive
        {...attrs}
        data-slot="switch-group"
        as={props.as}
        as-child={props.asChild}
        class={cn(styles.value.base(), props.class)}
      >
        {slots.default?.()}
      </Primitive>
    )
  }
})

export default SwitchGroupRoot
