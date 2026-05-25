import { DateField, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <DateField class="w-64" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>
            {segment => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
    </div>);
