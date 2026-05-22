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
 * `as`, `asChild`, `onUpdate:modelValue`, `onInvalid`) flow through `{...attrs}
        data-slot="tags-input"`
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
        class={cn(
          'flex flex-wrap items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm',
          'transition-[color,box-shadow] focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
          'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
          props.class
        )}
      >
        {slots.default?.()}
      </TagsInputRoot>
    )
  }
})

export default TagsInput
