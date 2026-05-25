import type { DateValue } from "@internationalized/date";
import { Button, DateField, DateRangePicker, Description, FieldError, Form, Label, RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
type DateRange = {
  start: DateValue;
  end: DateValue;
};
export default defineComponent(() => {
  const value = ref(null);
  const isSubmitting = ref(false);
  const currentDate = today(getLocalTimeZone());
  const isInvalid = value.value != null && (value.value.start.compare(currentDate) < 0 || value.value.end.compare(value.value.start) < 0);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value.value || isInvalid) return;
    isSubmitting.value = true;
    setTimeout(() => {
      value.value = null;
      isSubmitting.value = false;
    }, 1200);
  };
  return () => <Form class="flex w-72 flex-col gap-3" onSubmit={handleSubmit}>
      <DateRangePicker isRequired endName="tripEndDate" isInvalid={isInvalid} minValue={currentDate} startName="tripStartDate" value={value.value} onChange={v => value.value = v}>
        <Label>Trip dates</Label>
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
        {isInvalid ? <FieldError>Please choose a valid range in the future.</FieldError> : <Description>Select your check-in and check-out dates.</Description>}
        <DateRangePicker.Popover>
          <RangeCalendar aria-label="Trip dates">
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
      </DateRangePicker>
      <Button class="w-full" isDisabled={!value.value || isInvalid} isPending={isSubmitting.value} type="submit">
        {isSubmitting.value ? "Submitting..." : "Submit"}
      </Button>
    </Form>;
});
export default FormExample;
