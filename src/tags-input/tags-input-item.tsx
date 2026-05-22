import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputItem as TagsInputItemBase } from 'reka-ui'
// Thin wrapper: reka props (`value`, …) are forwarded via attrs at runtime.
const RekaTagsInputItem: any = TagsInputItemBase
import { cn } from '@/lib/utils'

/**
 * TagsInputItem — a single tag chip.
 *
 * Faithful port over reka-ui `TagsInputItem`. HeroUI `tag` taste: a compact
 * `rounded-md` chip on `bg-secondary` with `text-xs`. The required `value`
 * prop (and `disabled`, `as`, `asChild`) flow through `{...attrs}` to the
 * reka-ui primitive, which declares and validates them.
 */
export const TagsInputItem = defineComponent({
  name: 'TagsInputItem',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** HeroUI tag size. */
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    /** HeroUI tag variant. */
    variant: { type: String as PropType<'default' | 'surface'>, default: 'default' }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTagsInputItem
        {...(attrs as Record<string, any>)}
        data-slot="tag"
        class={cn(
          'tag',
          `tag--${props.size}`,
          `tag--${props.variant}`,
          props.class
        )}
      >
        {slots.default?.()}
      </RekaTagsInputItem>
    )
  }
})

export default TagsInputItem
