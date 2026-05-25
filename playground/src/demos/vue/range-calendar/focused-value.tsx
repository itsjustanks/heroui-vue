import type { DateValue } from "@internationalized/date";
import { Button, Description, RangeCalendar } from "@itsjustanks/heroui-vue";
import { parseDate } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const focusedDate = ref(parseDate("2025-06-15"));
  return () => <div class="flex flex-col items-center gap-4">
      <RangeCalendar aria-label="Trip dates" firstDayOfWeek="mon" focusedValue={focusedDate.value} onFocusChange={v => focusedDate.value = v}>
        <RangeCalendar.Header>
          <RangeCalendar.Heading />
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
      </RangeCalendar>
      <Description class="text-center">Focused: {focusedDate.value.toString()}</Description>
      <div class="flex flex-wrap justify-center gap-2">
        <Button size="sm" variant="secondary" onPress={() => focusedDate.value = parseDate("2025-01-01")}>
          Go to Jan
        </Button>
        <Button size="sm" variant="secondary" onPress={() => focusedDate.value = parseDate("2025-06-15")}>
          Go to Jun
        </Button>
        <Button size="sm" variant="secondary" onPress={() => focusedDate.value = parseDate("2025-12-25")}>
          Go to Christmas
        </Button>
      </div>
    </div>;
});
export default FocusedValue;
