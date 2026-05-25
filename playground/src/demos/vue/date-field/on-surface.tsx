import { Calendar } from "@gravity-ui/icons";
import { DateField, Description, Label, Surface } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="flex w-full max-w-sm flex-col gap-4 rounded-3xl p-6">
      <DateField class="w-full" name="date">
        <Label>Date</Label>
        <DateField.Group variant="secondary">
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        <Description>Enter a date</Description>
      </DateField>
      <DateField class="w-full" name="date-2">
        <Label>Appointment date</Label>
        <DateField.Group variant="secondary">
          <DateField.Prefix>
            <Calendar class="size-4 text-muted" />
          </DateField.Prefix>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        <Description>Enter a date for your appointment</Description>
      </DateField>
    </Surface>);
