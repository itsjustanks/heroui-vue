import { defineComponent, type HTMLAttributes, type PropType } from 'vue'

/**
 * FormRoot — a native `<form>` element wrapper.
 * Faithful Vue port of HeroUI v3 `Form` / `FormRoot`.
 *
 * The React source renders a bare `<form>` (react-aria-components `Form`)
 * with no variant classes applied. All native form attributes are forwarded
 * via `attrs`.
 */
export const FormRoot = defineComponent({
  name: 'FormRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <form
        {...attrs}
        class={props.class}
      >
        {slots.default?.()}
      </form>
    )
  }
})

export default FormRoot
