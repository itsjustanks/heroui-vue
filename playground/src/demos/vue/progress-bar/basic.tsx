import { Label, ProgressBar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ProgressBar aria-label="Loading" class="w-64" value={60}>
      <Label>Loading</Label>
      <ProgressBar.Output />
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>);
