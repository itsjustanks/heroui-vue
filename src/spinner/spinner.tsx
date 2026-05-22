import { defineComponent, useId, type HTMLAttributes, type PropType } from 'vue'
import { spinnerVariants, type SpinnerVariants } from '@heroui/styles'
import { cn } from '@/lib/utils'

/**
 * SpinnerPrimitive — the animated SVG icon inside a Spinner.
 * Mirrors HeroUI v3 React `SpinnerPrimitive` with matching linearGradient ids.
 */
const SpinnerPrimitive = defineComponent({
  name: 'SpinnerPrimitive',
  props: {
    id: { type: String, required: true }
  },
  setup (props) {
    return () => (
      <svg data-slot="spinner-icon" viewBox="0 0 24 24" aria-hidden="true" aria-label="Loading" role="presentation">
        <defs>
          <linearGradient id={`spinner-grad-1-${props.id}`} x1="50%" x2="50%" y1="5.271%" y2="91.793%">
            <stop offset="0%" stop-color="currentColor" />
            <stop offset="100%" stop-color="currentColor" stop-opacity={0.55} />
          </linearGradient>
          <linearGradient id={`spinner-grad-2-${props.id}`} x1="50%" x2="50%" y1="15.24%" y2="87.15%">
            <stop offset="0%" stop-color="currentColor" stop-opacity={0} />
            <stop offset="100%" stop-color="currentColor" stop-opacity={0.55} />
          </linearGradient>
        </defs>
        <g fill="none">
          <path
            d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021"
            fill={`url(#spinner-grad-1-${props.id})`}
            transform="translate(1.5 1.625)"
          />
          <path
            d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118"
            fill={`url(#spinner-grad-2-${props.id})`}
            transform="translate(1.5 1.625)"
          />
        </g>
      </svg>
    )
  }
})

/**
 * SpinnerRoot — faithful Vue port of HeroUI v3 `SpinnerRoot`.
 *
 * Flat style — `spinnerVariants({...})` returns a class string directly.
 * Inner SVG matches HeroUI's `SpinnerPrimitive` shape with gradient fills.
 */
export const SpinnerRoot = defineComponent({
  name: 'SpinnerRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    /** Spinner color — `spinner--{color}`. @default 'accent' */
    color: { type: String as PropType<SpinnerVariants['color']>, default: 'accent' },
    /** Spinner size — `spinner--{size}`. @default 'md' */
    size: { type: String as PropType<SpinnerVariants['size']>, default: 'md' }
  },
  setup (props, { attrs }) {
    const id = useId()
    return () => (
      <span
        data-slot="spinner"
        {...attrs}
        class={cn(spinnerVariants({ color: props.color, size: props.size }), props.class)}
      >
        <SpinnerPrimitive id={id} />
      </span>
    )
  }
})

export default SpinnerRoot
