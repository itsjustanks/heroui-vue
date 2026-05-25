import { Button, toast } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex h-full max-w-xl flex-col items-center justify-center">
      <div class="flex w-full flex-wrap items-center justify-center gap-4">
        <Button size="sm" variant="secondary" onPress={() => toast("Simple message")}>
          Default
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.success("Operation completed")}>
          Success
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.info("New update available")}>
          Info
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.warning("Please check your settings")}>
          Warning
        </Button>
        <Button size="sm" variant="secondary" onPress={() => toast.danger("Something went wrong")}>
          Error
        </Button>
      </div>
    </div>);
export default Simple;
