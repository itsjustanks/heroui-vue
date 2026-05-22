import { computed, defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { cn } from '@/lib/utils'

interface IFieldErrorItem { message?: string }

/**
 * FieldError — renders validation error(s) for a field. Faithful port of
 * `shadcn-vue`.
 *
 * Mirrors the source's `content` resolution exactly: a single-error array
 * collapses to its message; multiple errors render as a bulleted list; an
 * explicit default slot overrides both. Renders nothing when there is no
 * content (`v-if` → conditional return).
 */
export const FieldError = defineComponent({
  name: 'FieldError',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    errors: { type: Array as PropType<Array<IFieldErrorItem | undefined>>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    const content = computed<string | Array<IFieldErrorItem | undefined> | null>(() => {
      if (!props.errors || props.errors.length === 0) return null

      if (props.errors.length === 1 && props.errors[0]?.message) {
        return props.errors[0].message
      }

      return props.errors.some(e => e?.message)
        ? props.errors
        : null
    })

    return () => {
      const hasSlot = !!slots.default
      if (!hasSlot && !content.value) return null

      const resolved = content.value

      return (
        <span
          {...attrs}
          data-visible
          data-slot="field-error"
          class={cn('field-error', props.class)}
        >
          {hasSlot
            ? slots.default?.()
            : typeof resolved === 'string'
              ? resolved
              : Array.isArray(resolved)
                ? (
                  <ul class="ml-4 flex list-disc flex-col gap-1">
                    {resolved.map((error, index) => (
                      <li key={index}>{error?.message}</li>
                    ))}
                  </ul>
                )
                : null}
        </span>
      )
    }
  }
})

export default FieldError
