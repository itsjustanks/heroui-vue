import type { DateValue } from "@internationalized/date";
import { Button, RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import { useLocale } from "react-aria-components";
import { defineComponent, ref } from "vue";
type DateRange = {
  start: DateValue;
  end: DateValue;
};
export default defineComponent(() => {
  const selectedRange = ref(null);
  const {
    locale
  } = useLocale();
  const blockedDates = [5, 6, 12, 13, 14, 20];
  const isDateUnavailable = (date: DateValue) => {
    return isWeekend(date, locale) || blockedDates.includes(date.day);
  };
  return () => <div class="flex flex-col items-center gap-4">
      <RangeCalendar aria-label="Booking range" isDateUnavailable={isDateUnavailable} minValue={today(getLocalTimeZone())} value={selectedRange.value} onChange={v => selectedRange.value = v}>
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
            {date => <RangeCalendar.Cell date={date}>
                {({
              formattedDate,
              isUnavailable
            }) => <>
                    {formattedDate}
                    {!isUnavailable && !isWeekend(date, locale) && blockedDates.includes(date.day) && <RangeCalendar.CellIndicator />}
                  </>}
              </RangeCalendar.Cell>}
          </RangeCalendar.GridBody>
        </RangeCalendar.Grid>
      </RangeCalendar>
      <div class="flex flex-col gap-2 text-center">
        <div class="flex items-center justify-center gap-4 text-xs text-muted">
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-muted" /> Blocked dates
          </span>
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-default" /> Weekend/Unavailable
          </span>
        </div>
        {selectedRange.value ? <Button size="sm" variant="primary">
            Book {selectedRange.value.start.toString()} -&gt; {selectedRange.value.end.toString()}
          </Button> : null}
      </div>
    </div>;
});
export default BookingCalendar;
