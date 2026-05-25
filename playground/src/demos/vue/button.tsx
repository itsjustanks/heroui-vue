import { Button } from "@itsjustanks/heroui-vue";

/** Reference React demo — the HeroUI v3 React component, for side-by-side parity. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>);
