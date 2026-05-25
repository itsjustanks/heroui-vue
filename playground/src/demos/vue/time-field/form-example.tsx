import type { Time } from "@internationalized/date";
import { Clock } from "../../../gravity-icons-vue";
import { Button, Description, FieldError, Form, Label, TimeField } from "@itsjustanks/heroui-vue";
import { parseTime } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const isSubmitting = ref(false);
  const minTime = parseTime("09:00");
  const maxTime = parseTime("17:00");
  const isInvalid = value.value !== null && (value.value.compare(minTime) < 0 || value.value.compare(maxTime) > 0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.value || isInvalid) {
      return;
    }
    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
      console.log("Time submitted:", {
        time: value.value
      });
      value.value = null;
      isSubmitting.value = false;
    }, 1500);
  };
  return () => <Form class="flex w-[280px] flex-col gap-4" onSubmit={handleSubmit}>
      <TimeField isRequired class="w-full" isInvalid={isInvalid} maxValue={maxTime} minValue={minTime} name="time" value={value.value} onChange={v => value.value = v}>
        <Label>Appointment time</Label>
        <TimeField.Group>
          <TimeField.Prefix>
            <Clock class="size-4 text-muted" />
          </TimeField.Prefix>
          <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        {isInvalid ? <FieldError>Time must be between 9:00 AM and 5:00 PM</FieldError> : <Description>Enter a time between 9:00 AM and 5:00 PM</Description>}
      </TimeField>
      <Button class="w-full" isDisabled={!value.value || isInvalid} isPending={isSubmitting.value} type="submit" variant="primary">
        {isSubmitting.value ? "Submitting..." : "Submit"}
      </Button>
    </Form>;
});
export default FormExample;
