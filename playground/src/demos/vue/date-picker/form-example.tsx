import type { DateValue } from "@internationalized/date";
import { Button, Calendar, DateField, DatePicker, Description, FieldError, Form, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const isSubmitting = ref(false);
  const currentDate = today(getLocalTimeZone());
  const isInvalid = value.value != null && value.value.compare(currentDate) < 0;
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value.value || isInvalid) {
      return;
    }
    isSubmitting.value = true;
    setTimeout(() => {
      value.value = null;
      isSubmitting.value = false;
    }, 1200);
  };
  return () => <Form class="flex w-64 flex-col gap-3" onSubmit={handleSubmit}>
      <DatePicker isRequired isInvalid={isInvalid} minValue={currentDate} name="appointmentDate" value={value.value} onChange={v => value.value = v}>
        <Label>Appointment date</Label>
        <DateField.Group fullWidth>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
          <DateField.Suffix>
            <DatePicker.Trigger>
              <DatePicker.TriggerIndicator />
            </DatePicker.Trigger>
          </DateField.Suffix>
        </DateField.Group>
        {isInvalid ? <FieldError>Date must be today or in the future.</FieldError> : <Description>Choose a valid appointment date.</Description>}
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
      </DatePicker>
      <Button class="w-full" isDisabled={!value.value || isInvalid} isPending={isSubmitting.value} type="submit">
        {isSubmitting.value ? "Submitting..." : "Submit"}
      </Button>
    </Form>;
});
export default FormExample;
