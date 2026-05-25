import { RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone } from "@internationalized/date";
import { RangeCalendarStateContext, useLocale } from "react-aria-components";
import { defineComponent } from "vue";
function RangeCalendarMonthHeading({
  offset = 0
}: {
  offset?: number;
}) {
  const state = React.useContext(RangeCalendarStateContext)!;
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
export default defineComponent(() => () => <RangeCalendar aria-label="Vacation planning" class="@container-normal w-auto overflow-x-auto" visibleDuration={{
  months: 3
}}>
      <RangeCalendar.Heading class="sr-only" />
      <div class="flex w-max gap-7">
        <div class="w-64">
          <RangeCalendar.Header>
            <RangeCalendar.NavButton slot="previous" />
            <RangeCalendarMonthHeading offset={0} />
            <div class="size-6" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid>
            <RangeCalendar.GridHeader>
              {day => <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {date => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </div>
        <div class="w-64">
          <RangeCalendar.Header>
            <div class="size-6" />
            <RangeCalendarMonthHeading offset={1} />
            <div class="size-6" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid offset={{
        months: 1
      }}>
            <RangeCalendar.GridHeader>
              {day => <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {date => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </div>
        <div class="w-64">
          <RangeCalendar.Header>
            <div class="size-6" />
            <RangeCalendarMonthHeading offset={2} />
            <RangeCalendar.NavButton slot="next" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid offset={{
        months: 2
      }}>
            <RangeCalendar.GridHeader>
              {day => <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {date => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </div>
      </div>
    </RangeCalendar>);
export default ThreeMonths;
