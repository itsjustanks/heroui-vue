/**
 * VueSafe — error boundary for a Vue demo. A throwing demo renders an inline
 * error message instead of blanking the pane. Give it a `:key` per component so
 * switching demos starts with a fresh boundary.
 */
import { defineComponent, h, onErrorCaptured, ref } from 'vue'

export default defineComponent({
  name: 'VueSafe',
  setup (_props, { slots }) {
    const error = ref<Error | null>(null)

    onErrorCaptured((err) => {
      error.value = err as Error
      return false
    })

    return () => error.value
      ? h('div', { class: 'demo-error' }, `Vue demo error — ${error.value.message}`)
      : slots.default?.()
  }
})
