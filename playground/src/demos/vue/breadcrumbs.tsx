import { defineComponent } from 'vue'
import { Breadcrumbs } from '@itsjustanks/heroui-vue'

/** Vue demo — Breadcrumbs compound API. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
      <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
    </Breadcrumbs>
  </div>
))
