import { Label, ProgressBar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex w-64 flex-col gap-6">
      <ProgressBar aria-label="Small" size="sm" value={40}>
        <Label>Small</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
      <ProgressBar aria-label="Medium" size="md" value={60}>
        <Label>Medium</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
      <ProgressBar aria-label="Large" size="lg" value={80}>
        <Label>Large</Label>
        <ProgressBar.Output />
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>
    </div>);
