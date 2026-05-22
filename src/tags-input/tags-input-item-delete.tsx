import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputItemDelete as RekaTagsInputItemDelete } from 'reka-ui'
import { X as IconX } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

/**
 * TagsInputItemDelete — the remove (`×`) control inside a {@link TagsInputItem}.
 *
 * Faithful port over reka-ui `TagsInputItemDelete`. HeroUI `tag` taste: a small
 * `rounded` icon button that brightens on hover. Defaults to a lucide `X`
 * glyph; the default slot overrides it. Real-logic props (`as`, `asChild`)
 * flow through `{...attrs}`.
 */
export const TagsInputItemDelete = defineComponent({
  name: 'TagsInputItemDelete',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <RekaTagsInputItemDelete
        {...attrs}
        class={cn(
          'flex size-4 items-center justify-center rounded bg-transparent text-secondary-foreground/70 transition-colors hover:text-secondary-foreground',
          props.class
        )}
      >
        {slots.default?.() ?? <IconX class="size-3" />}
      </RekaTagsInputItemDelete>
    )
  }
})

export default TagsInputItemDelete
