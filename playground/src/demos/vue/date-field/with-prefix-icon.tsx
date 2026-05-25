import { Calendar } from "@gravity-ui/icons";
import { DateField, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <DateField class="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Calendar class="size-4 text-muted" />
        </DateField.Prefix>
        <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>);
