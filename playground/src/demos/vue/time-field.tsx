import { Label, TimeField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <TimeField class="w-64" name="time">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>
            {segment => <TimeField.Segment segment={segment} />}
          </TimeField.Input>
        </TimeField.Group>
      </TimeField>
    </div>);
