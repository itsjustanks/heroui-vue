import { DateField, Description, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <DateField isDisabled class="w-[256px]" name="date" value={today(getLocalTimeZone())}>
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        <Description>This date field is disabled</Description>
      </DateField>
      <DateField isDisabled class="w-[256px]" name="date-empty">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        <Description>This date field is disabled</Description>
      </DateField>
    </div>);
