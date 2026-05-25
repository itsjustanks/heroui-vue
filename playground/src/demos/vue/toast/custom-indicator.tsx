import { Star } from "@gravity-ui/icons";
import { Button, toast } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex h-full max-w-xl flex-col items-center justify-center">
      <Button size="sm" variant="secondary" onPress={() => toast("Custom icon indicator", {
    indicator: <Star />
  })}>
        Custom indicator
      </Button>
    </div>);
