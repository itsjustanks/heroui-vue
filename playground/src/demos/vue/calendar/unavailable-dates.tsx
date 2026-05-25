import type { DateValue } from "@internationalized/date";
import { Calendar, Description } from "@itsjustanks/heroui-vue";
import { isWeekend } from "@internationalized/date";
import { useLocale } from "react-aria-components";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const {
    locale
  } = useLocale();
  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);
  return () => <div class="flex flex-col items-center gap-4">
      <Calendar aria-label="Appointment date" isDateUnavailable={isDateUnavailable}>
        <Calendar.Header>
          <Calendar.Heading />
          <Calendar.NavButton slot="previous" />
          <Calendar.NavButton slot="next" />
        </Calendar.Header>
        <Calendar.Grid>
          <Calendar.GridHeader>
            {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
          </Calendar.GridHeader>
          <Calendar.GridBody>{date => <Calendar.Cell date={date} />}</Calendar.GridBody>
        </Calendar.Grid>
      </Calendar>
      <Description class="text-center">Weekends are unavailable</Description>
    </div>;
});
