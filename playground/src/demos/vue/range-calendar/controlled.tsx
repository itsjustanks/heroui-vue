import type { DateValue } from "@internationalized/date";
import { Button, ButtonGroup, Description, RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, parseDate, startOfMonth, startOfWeek, today } from "@internationalized/date";
import { useLocale } from "react-aria-components";
import { defineComponent, ref } from "vue";
type DateRange = {
  start: DateValue;
  end: DateValue;
};
export default defineComponent(() => {
  const value = ref(null);
  const focusedDate = ref(parseDate("2025-12-25"));
  const {
    locale
  } = useLocale();
  return () => <div class="flex flex-col items-center gap-4">
      <ButtonGroup variant="tertiary">
        <Button onPress={() => {
        const start = today(getLocalTimeZone());
        focusedDate.value = start;
      }}>
          This week
        </Button>
        <Button onPress={() => {
        const nextWeekStart = startOfWeek(today(getLocalTimeZone()).add({
          weeks: 1
        }), locale);
        focusedDate.value = nextWeekStart;
      }}>
          Next week
        </Button>
        <Button onPress={() => {
        const nextMonthStart = startOfMonth(today(getLocalTimeZone()).add({
          months: 1
        }));
        focusedDate.value = nextMonthStart;
      }}>
          Next month
        </Button>
      </ButtonGroup>

      <RangeCalendar aria-label="Trip dates" firstDayOfWeek="mon" focusedValue={focusedDate.value} value={value.value} onChange={v => value.value = v} onFocusChange={v => focusedDate.value = v}>
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

      <Description class="text-center">
        Selected range: {value.value ? `${value.value.start.toString()} -> ${value.value.end.toString()}` : "(none)"}
      </Description>

      <div class="flex gap-2">
        <Button size="sm" variant="secondary" onPress={() => {
        const start = today(getLocalTimeZone());
        value.value = {
          end: start.add({
            days: 6
          }),
          start
        };
        focusedDate.value = start;
      }}>
          Set 1 week
        </Button>
        <Button size="sm" variant="secondary" onPress={() => {
        const start = parseDate("2025-12-20");
        value.value = {
          end: parseDate("2025-12-31"),
          start
        };
        focusedDate.value = start;
      }}>
          Set Holidays
        </Button>
        <Button size="sm" variant="tertiary" onPress={() => value.value = null}>
          Clear
        </Button>
      </div>
    </div>;
});
export default Controlled;
