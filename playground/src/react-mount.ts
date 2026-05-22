/**
 * ReactMount — renders a React component inside the Vue tree.
 *
 * The playground is a Vue app; React demos (`@heroui/react`) are mounted into a
 * host `<div>` via `react-dom/client`. React owns its own subtree. An error
 * boundary keeps one broken demo from blanking the pane. Give each use a `:key`
 * so switching components remounts cleanly.
 */
import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  Component as ReactComponent,
  createElement,
  type ComponentType,
  type ReactNode
} from 'react'
import { createRoot, type Root } from 'react-dom/client'

interface BoundaryState { error: Error | null }

/** React error boundary — isolates a throwing demo. */
class DemoBoundary extends ReactComponent<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { error: null }

  static getDerivedStateFromError (error: Error): BoundaryState {
    return { error }
  }

  render (): ReactNode {
    if (this.state.error) {
      return createElement(
        'div',
        { className: 'demo-error' },
        `React demo error — ${this.state.error.message}`
      )
    }
    return this.props.children
  }
}

export default defineComponent({
  name: 'ReactMount',
  props: {
    /** The React component to render. */
    component: { type: [Function, Object], required: true }
  },
  setup (props) {
    const host = ref<HTMLElement>()
    let root: Root | null = null

    onMounted(() => {
      root = createRoot(host.value as HTMLElement)
      root.render(
        createElement(DemoBoundary, null, createElement(props.component as ComponentType))
      )
    })
    onBeforeUnmount(() => {
      root?.unmount()
      root = null
    })

    return () => h('div', { ref: host, class: 'react-host' })
  }
})
