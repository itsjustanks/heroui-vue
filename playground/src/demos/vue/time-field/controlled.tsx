import type { TimeValue } from "@itsjustanks/heroui-vue";
import { Button, Description, Label, TimeField } from "@itsjustanks/heroui-vue";
import { Time, getLocalTimeZone, now } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  return () => <div class="flex flex-col gap-4">
      <TimeField class="w-[256px]" name="time" value={value.value} onChange={setValue}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        <Description>Current value: {value.value ? value.value.toString() : "(empty)"}</Description>
      </TimeField>
      <div class="flex gap-2">
        <Button variant="tertiary" onPress={() => {
        const currentTime = now(getLocalTimeZone());
        value.value = new Time(currentTime.hour, currentTime.minute, currentTime.second);
      }}>
          Set now
        </Button>
        <Button variant="tertiary" onPress={() => value.value = null}>
          Clear
        </Button>
      </div>
    </div>;
});
