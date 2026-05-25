import { Button } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Button render={(props, {
  isPressed
}) => <button {...props} data-custom={isPressed ? "pressed" : "bar"} />}>
      Press me
    </Button>);
