import { defineComponent, type HTMLAttributes, type PropType } from 'vue'
import { IconLoader } from '@/icons'
import { cn } from '@/lib/utils'

/**
 * Spinner — HeroUI-Vue primitive: a determinate-free loading indicator.
 *
 * Maps to HeroUI `spinner` BEM classes. `size` and `color` props select the
 * modifier classes from `spinner.css`. Uses `data-slot="spinner"` so HeroUI CSS
 * targeting `[data-slot="spinner"]` resolves correctly.
 */
export const Spinner = defineComponent({
  name: 'SpinnerRoot',
  inheritAttrs: false,
  props: {
    class: { type: [String, Array, Object] as PropType<HTMLAttributes['class']>, default: undefined },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
      default: 'md'
    },
    color: {
      type: String as PropType<'accent' | 'current' | 'danger' | 'success' | 'warning'>,
      default: 'accent'
    }
  },
  setup (props, { attrs }) {
    return () => (
      <IconLoader
        role="status"
        aria-label="Loading"
        data-slot="spinner"
        {...attrs}
        class={cn(
          'spinner',
          props.size === 'sm' && 'spinner--sm',
          props.size === 'lg' && 'spinner--lg',
          props.size === 'xl' && 'spinner--xl',
          props.color === 'accent' && 'spinner--accent',
          props.color === 'current' && 'spinner--current',
          props.color === 'danger' && 'spinner--danger',
          props.color === 'success' && 'spinner--success',
          props.color === 'warning' && 'spinner--warning',
          props.class
        )}
      />
    )
  }
})

export default Spinner
