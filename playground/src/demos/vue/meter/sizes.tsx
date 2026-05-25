import { Label, Meter } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex w-64 flex-col gap-6">
      <Meter color="success" size="sm" value={40}>
        <Label>Small</Label>
        <Meter.Output />
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>
      <Meter color="accent" size="md" value={60}>
        <Label>Medium</Label>
        <Meter.Output />
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>
      <Meter color="warning" size="lg" value={80}>
        <Label>Large</Label>
        <Meter.Output />
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>
    </div>);
