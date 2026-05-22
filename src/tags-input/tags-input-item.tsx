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
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTagsInputItem
        {...(attrs as Record<string, any>)}
        class={cn(
          'flex h-6 items-center gap-0.5 rounded-md bg-secondary pl-2 pr-1 text-xs font-medium text-secondary-foreground',
          'ring-offset-background data-[state=active]:ring-2 data-[state=active]:ring-ring data-[state=active]:ring-offset-2',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
      </RekaTagsInputItem>
    )
  }
})

export default TagsInputItem
