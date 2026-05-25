import type { TimeValue } from "@itsjustanks/heroui-vue";
import type { DateValue } from "@internationalized/date";
import { Calendar, DateField, DatePicker, Label, ListBox, Select, Switch, TimeField } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, parseDate, parseZonedDateTime } from "@internationalized/date";
import { computed, defineComponent, ref } from "vue";
type Granularity = "day" | "hour" | "minute" | "second";
type HourCycle = 12 | 24;
const granularityOptions: {
  label: string;
  value: Granularity;
}[] = [{
  label: "Day",
  value: "day"
}, {
  label: "Hour",
  value: "hour"
}, {
  label: "Minute",
  value: "minute"
}, {
  label: "Second",
  value: "second"
}];
const hourCycleOptions: {
  label: string;
  value: HourCycle;
}[] = [{
  label: "12-hour",
  value: 12
}, {
  label: "24-hour",
  value: 24
}];
export default defineComponent(() => {
  const granularity = ref("minute");
  const hourCycle = ref(12);
  const hideTimeZone = ref(false);
  const shouldForceLeadingZeros = ref(false);
  const timeGranularity = granularity.value !== "day" ? granularity.value : undefined;
  const showTimeField = !!timeGranularity;
  const defaultValue = computed(() => {
    const localTimeZone = getLocalTimeZone();
    if (granularity.value === "day") {
      return parseDate("2026-02-03");
    }
    return parseZonedDateTime(`2026-02-03T08:45:00[${localTimeZone}]`);
  });
  return () => <div class="flex flex-col gap-4">
      <DatePicker key={granularity.value} class="w-fit min-w-64" defaultValue={defaultValue.value} granularity={granularity.value} hideTimeZone={hideTimeZone.value} hourCycle={hourCycle.value} name="date" shouldForceLeadingZeros={shouldForceLeadingZeros.value}>
        {({
        state
      }) => <>
            <Label>Date and time</Label>
            <DateField.Group fullWidth>
              <DateField.Input>
                {segment => <DateField.Segment segment={segment} />}
              </DateField.Input>
              <DateField.Suffix>
                <DatePicker.Trigger>
                  <DatePicker.TriggerIndicator />
                </DatePicker.Trigger>
              </DateField.Suffix>
            </DateField.Group>
            <DatePicker.Popover class="flex flex-col gap-3">
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
              {!!showTimeField && <div class="flex items-center justify-between">
                  <Label>Time</Label>
                  <TimeField aria-label="Time" granularity={timeGranularity} hideTimeZone={hideTimeZone.value} hourCycle={hourCycle.value} name="time" shouldForceLeadingZeros={shouldForceLeadingZeros.value} value={state.timeValue} onChange={v => state.setTimeValue(v as TimeValue)}>
                    <TimeField.Group variant="secondary">
                      <TimeField.Input>
                        {segment => <TimeField.Segment segment={segment} />}
                      </TimeField.Input>
                    </TimeField.Group>
                  </TimeField>
                </div>}
            </DatePicker.Popover>
          </>}
      </DatePicker>

      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col gap-1">
          <Select class="w-[120px]" value={granularity.value} variant="secondary" onChange={value => granularity.value = value as Granularity}>
            <Label>Granularity</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {granularityOptions.map(option => <ListBox.Item key={option.value} id={option.value} textValue={option.label}>
                    {option.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>)}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        <div class="flex flex-col gap-1">
          <Select class="w-[120px]" value={hourCycle.value} variant="secondary" onChange={value => hourCycle.value = Number(value) as HourCycle}>
            <Label>Hour cycle</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {hourCycleOptions.map(option => <ListBox.Item key={option.value} id={option.value} textValue={option.label}>
                    {option.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>)}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      <div class="flex min-w-80 flex-col gap-2">
        <Switch isSelected={hideTimeZone.value} onChange={setHideTimeZone}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label class="text-sm">Hide timezone</Label>
        </Switch>
        <Switch isSelected={shouldForceLeadingZeros.value} onChange={setShouldForceLeadingZeros}>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Label class="text-sm">Force leading zeros</Label>
        </Switch>
      </div>
    </div>;
});
