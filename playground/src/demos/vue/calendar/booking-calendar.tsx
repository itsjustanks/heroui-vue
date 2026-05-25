import type { DateValue } from "@internationalized/date";
import { Button, Calendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import { useLocale } from "react-aria-components";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selectedDate = ref(null);
  const {
    locale
  } = useLocale();
  const bookedDates = [5, 6, 12, 13, 14, 20];
  const isDateUnavailable = (date: DateValue) => {
    return isWeekend(date, locale) || bookedDates.includes(date.day);
  };
  return () => <div class="flex flex-col items-center gap-4">
      <Calendar aria-label="Booking date" isDateUnavailable={isDateUnavailable} minValue={today(getLocalTimeZone())} value={selectedDate.value} onChange={v => selectedDate.value = v}>
        <Calendar.Header>
          <Calendar.Heading />
          <Calendar.NavButton slot="previous" />
          <Calendar.NavButton slot="next" />
        </Calendar.Header>
        <Calendar.Grid>
          <Calendar.GridHeader>
            {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
          </Calendar.GridHeader>
          <Calendar.GridBody>
            {date => <Calendar.Cell date={date}>
                {({
              formattedDate,
              isUnavailable
            }) => <>
                    {formattedDate}
                    {!isUnavailable && !isWeekend(date, locale) && bookedDates.includes(date.day) && <Calendar.CellIndicator />}
                  </>}
              </Calendar.Cell>}
          </Calendar.GridBody>
        </Calendar.Grid>
      </Calendar>

      <div class="flex flex-col gap-2 text-center">
        <div class="flex items-center justify-center gap-4 text-xs text-muted">
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-muted" /> Has bookings
          </span>
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-full bg-default" /> Weekend/Unavailable
          </span>
        </div>
        {selectedDate.value ? <Button size="sm" variant="primary">
            Book {selectedDate.value.toString()}
          </Button> : null}
      </div>
    </div>;
});
export default BookingCalendar;
