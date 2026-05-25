import { Breadcrumbs } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>);
