import type { DateValue } from "@internationalized/date";
import { CircleQuestion } from "../../../gravity-icons-vue";
import { DateField, Label, ListBox, Select, Tooltip } from "@itsjustanks/heroui-vue";
import { parseDate, parseZonedDateTime } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const granularityOptions = [{
    id: "day",
    label: "Day"
  }, {
    id: "hour",
    label: "Hour"
  }, {
    id: "minute",
    label: "Minute"
  }, {
    id: "second",
    label: "Second"
  }] as const;
  const granularity = ref("day");
  // Determine appropriate default value based on granularity
  let defaultValue: DateValue;
  if (granularity.value === "day") {
    defaultValue = parseDate("2025-02-03");
  } else {
    // hour, minute, second
    defaultValue = parseZonedDateTime("2025-02-03T08:45:00[America/Los_Angeles]");
  }
  return () => <div class="flex gap-4">
      <DateField class="w-[256px]" defaultValue={defaultValue} granularity={granularity.value} name="granularity-date">
        <Label>Appointment Date</Label>
        <DateField.Group>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
      </DateField>
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <Label>Granularity</Label>
          <Tooltip delay={0}>
            <Tooltip.Trigger aria-label="Granularity information">
              <CircleQuestion class="size-4 text-muted" />
            </Tooltip.Trigger>
            <Tooltip.Content placement="bottom start">
              <p>
                Determines the smallest unit displayed in the date picker. By default, this is "day"
                for dates, and "minute" for times.
              </p>
            </Tooltip.Content>
          </Tooltip>
        </div>
        <Select class="w-[110px]" placeholder="Select granularity" value={granularity.value} variant="secondary" onChange={value => granularity.value = value as typeof granularity}>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {granularityOptions.map(option => <ListBox.Item key={option.id} id={option.id} textValue={option.label}>
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>;
});
export default Granularity;
