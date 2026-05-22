import { defineComponent } from 'vue'
import { Label, ProgressBar } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <ProgressBar aria-label="Loading" class="w-64" value={60}>
      <Label>Loading</Label>
      <ProgressBar.Output />
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
  </div>
))
