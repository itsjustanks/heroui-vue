import { Calendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone } from "@internationalized/date";
import { CalendarStateContext, useLocale } from "react-aria-components";
import { defineComponent } from "vue";
function CalendarMonthHeading({
  offset = 0
}: {
  offset?: number;
}) {
  const state = React.useContext(CalendarStateContext)!;
  const {
    locale
  } = useLocale();
  const startDate = state.visibleRange.start;
  const monthDate = startDate.add({
    months: offset
  });
  const dateObj = monthDate.toDate(getLocalTimeZone());
  const monthYear = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric"
  }).format(dateObj);
  return <span className="text-sm font-medium">{monthYear}</span>;
}
export default defineComponent(() => () => <Calendar aria-label="Trip dates" class="@container-normal w-auto overflow-x-auto" visibleDuration={{
  months: 2
}}>
      <Calendar.Heading class="sr-only" />
      <div class="flex w-max gap-8">
        <div class="w-64">
          <Calendar.Header>
            <Calendar.NavButton slot="previous" />
            <CalendarMonthHeading offset={0} />
            <div class="size-6" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{date => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
        </div>
        <div class="w-64">
          <Calendar.Header>
            <div class="size-6" />
            <CalendarMonthHeading offset={1} />
            <Calendar.NavButton slot="next" />
          </Calendar.Header>
          <Calendar.Grid offset={{
        months: 1
      }}>
            <Calendar.GridHeader>
              {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>{date => <Calendar.Cell date={date} />}</Calendar.GridBody>
          </Calendar.Grid>
        </div>
      </div>
    </Calendar>);
