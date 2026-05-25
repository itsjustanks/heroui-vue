import type { DateValue } from "@internationalized/date";
import { DateField, DateRangePicker, FieldError, Label, RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
type DateRange = {
  start: DateValue;
  end: DateValue;
};
export default defineComponent(() => {
  const value = ref(null);
  const currentDate = today(getLocalTimeZone());
  const isInvalid = value.value != null && (value.value.start.compare(currentDate) < 0 || value.value.end.compare(value.value.start) < 0);
  return () => <DateRangePicker isRequired class="w-72" endName="endDate" isInvalid={isInvalid} minValue={currentDate} startName="startDate" value={value.value} onChange={v => value.value = v}>
      <Label>Booking period</Label>
      <DateField.Group fullWidth>
        <DateField.Input slot="start">
          {segment => <DateField.Segment segment={segment} />}
        </DateField.Input>
        <DateRangePicker.RangeSeparator />
        <DateField.Input slot="end">
          {segment => <DateField.Segment segment={segment} />}
        </DateField.Input>
        <DateField.Suffix>
          <DateRangePicker.Trigger>
            <DateRangePicker.TriggerIndicator />
          </DateRangePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <FieldError>Select a valid range starting today or later.</FieldError>
      <DateRangePicker.Popover>
        <RangeCalendar aria-label="Booking period">
          <RangeCalendar.Header>
            <RangeCalendar.YearPickerTrigger>
              <RangeCalendar.YearPickerTriggerHeading />
              <RangeCalendar.YearPickerTriggerIndicator />
            </RangeCalendar.YearPickerTrigger>
            <RangeCalendar.NavButton slot="previous" />
            <RangeCalendar.NavButton slot="next" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid>
            <RangeCalendar.GridHeader>
              {day => <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {date => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
          <RangeCalendar.YearPickerGrid>
            <RangeCalendar.YearPickerGridBody>
              {({
              year
            }) => <RangeCalendar.YearPickerCell year={year} />}
            </RangeCalendar.YearPickerGridBody>
          </RangeCalendar.YearPickerGrid>
        </RangeCalendar>
      </DateRangePicker.Popover>
    </DateRangePicker>;
});
export default WithValidation;
