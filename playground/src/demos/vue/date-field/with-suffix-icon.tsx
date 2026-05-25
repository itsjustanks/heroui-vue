import { Calendar } from "../../../gravity-icons-vue";
import { DateField, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <DateField class="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        <DateField.Suffix>
          <Calendar class="size-4 text-muted" />
        </DateField.Suffix>
      </DateField.Group>
    </DateField>);
export default WithSuffixIcon;
