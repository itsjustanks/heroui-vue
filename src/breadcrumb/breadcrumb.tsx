import { defineComponent, type HTMLAttributes, type PropType } from 'vue'

/**
 * Breadcrumb — root `<nav>` landmark.
 *
 * HeroUI-Vue primitive ported from `shadcn/breadcrumb`, restyled to HeroUI v3
 * `breadcrumbs.css` taste. Plain `<nav>` wrapper — behaviour is identical to
 * the source; only syntax changes.
 */
export const Breadcrumb = defineComponent({
  name: 'Breadcrumb',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined }
  },
  setup (props, { attrs, slots }) {
    return () => (
      <nav {...attrs} aria-label="breadcrumb" class={props.class}>
        {slots.default?.()}
      </nav>
    )
  }
})

export default Breadcrumb
