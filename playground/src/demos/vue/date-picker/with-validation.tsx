import type { DateValue } from "@internationalized/date";
import { Calendar, DateField, DatePicker, FieldError, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const currentDate = today(getLocalTimeZone());
  const isInvalid = value.value != null && value.value.compare(currentDate) < 0;
  return () => <DatePicker isRequired class="w-64" isInvalid={isInvalid} minValue={currentDate} name="date" value={value.value} onChange={setValue}>
      <Label>Appointment date</Label>
      <DateField.Group fullWidth>
        <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <FieldError>Date must be today or in the future.</FieldError>
      <DatePicker.Popover>
        <Calendar aria-label="Event date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="previous" />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{date => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({
              year
            }) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>;
});
