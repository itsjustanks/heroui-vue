import { Label, Meter } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <Meter aria-label="Storage" class="w-64" value={60}>
        <Label>Storage</Label>
        <Meter.Output />
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>
    </div>);
