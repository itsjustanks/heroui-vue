import type { DateValue } from "@internationalized/date";
import { Calendar } from "@gravity-ui/icons";
import { Button, DateField, Description, FieldError, Form, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const isSubmitting = ref(false);
  const todayDate = today(getLocalTimeZone());
  const isInvalid = value.value !== null && value.value.compare(todayDate) < 0;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.value || isInvalid) {
      return;
    }
    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
      console.log("Date submitted:", {
        date: value.value
      });
      value.value = null;
      isSubmitting.value = false;
    }, 1500);
  };
  return () => <Form class="flex w-[280px] flex-col gap-4" onSubmit={handleSubmit}>
      <DateField isRequired class="w-full" isInvalid={isInvalid} minValue={todayDate} name="date" value={value.value} onChange={setValue}>
        <Label>Appointment date</Label>
        <DateField.Group>
          <DateField.Prefix>
            <Calendar class="size-4 text-muted" />
          </DateField.Prefix>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        {isInvalid ? <FieldError>Date must be today or in the future</FieldError> : <Description>Enter a date from today onwards</Description>}
      </DateField>
      <Button class="w-full" isDisabled={!value.value || isInvalid} isPending={isSubmitting.value} type="submit" variant="primary">
        {isSubmitting.value ? "Submitting..." : "Submit"}
      </Button>
    </Form>;
});
