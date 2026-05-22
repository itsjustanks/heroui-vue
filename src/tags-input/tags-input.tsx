import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { TagsInputRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

/**
 * TagsInput — root of the HeroUI-Vue tags-input (primitive library).
 *
 * Faithful port over reka-ui `TagsInputRoot`. HeroUI `text-field` taste: a
 * `rounded-md` input container with `border-input`, `bg-background`, and a
 * focus-within ring. Tag chips flow inline (`flex-wrap gap-2`).
 *
 * All real-logic props/emits (`modelValue`, `defaultValue`, `addOnPaste`,
 * `duplicate`, `disabled`, `delimiter`, `dir`, `max`, `required`, `name`, `id`,
 * `as`, `asChild`, `onUpdate:modelValue`, `onInvalid`) flow through `{...attrs}`
 * to the reka-ui primitive — only `class` is declared.
 */
export const TagsInput = defineComponent({
  name: 'TagsInput',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <TagsInputRoot
        {...attrs}
        data-slot="tag-group"
        class={cn('tag-group tag-group__list', props.class)}
      >
        {slots.default?.()}
      </TagsInputRoot>
    )
  }
})

export default TagsInput
