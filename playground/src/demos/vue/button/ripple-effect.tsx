import { Button } from "@itsjustanks/heroui-vue";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Button variant="secondary">
      <Ripple />
      Click me
    </Button>);
