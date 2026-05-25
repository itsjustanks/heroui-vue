import { Breadcrumbs } from "@itsjustanks/heroui-vue";

/** React demo — Breadcrumbs (HeroUI v3), mirrors the Vue parity demo. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <Breadcrumbs>
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Electronics</Breadcrumbs.Item>
        <Breadcrumbs.Item>Laptop</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>);
