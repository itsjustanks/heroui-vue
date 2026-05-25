import { Description, Label, TimeField } from "@itsjustanks/heroui-vue";
import { Time, getLocalTimeZone, now } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const currentTime = now(getLocalTimeZone());
  const timeValue = new Time(currentTime.hour, currentTime.minute, currentTime.second);
  return () => <div class="flex flex-col gap-4">
      <TimeField isDisabled class="w-[256px]" name="time" value={timeValue}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        <Description>This time field is disabled</Description>
      </TimeField>
      <TimeField isDisabled class="w-[256px]" name="time-empty">
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        <Description>This time field is disabled</Description>
      </TimeField>
    </div>;
});
