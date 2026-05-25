import { Label, ProgressBar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ProgressBar isIndeterminate aria-label="Loading" class="w-64">
      <Label>Loading...</Label>
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>);
