import { Fragment, defineComponent } from 'vue'

/**
 * TableCollection — Vue compatibility part for React Aria's `Collection`.
 *
 * Vue callers can render dynamic cells directly with `v-for`; this fragment
 * preserves the public compound API for source parity.
 */
export const TableCollection = defineComponent({
  name: 'TableCollection',
  setup (_props, { slots }) {
    return () => <Fragment>{slots.default?.()}</Fragment>
  }
})

export default TableCollection
