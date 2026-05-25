import { Calendar, ChevronDown } from "../../../gravity-icons-vue";
import { DateField, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <DateField class="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Prefix>
          <Calendar class="size-4 text-muted" />
        </DateField.Prefix>
        <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        <DateField.Suffix>
          <ChevronDown class="size-4 text-muted" />
        </DateField.Suffix>
      </DateField.Group>
      <Description>Enter a date</Description>
    </DateField>);
export default WithPrefixAndSuffix;
