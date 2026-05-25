import { Description, RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const now = today(getLocalTimeZone());
  const minDate = now;
  const maxDate = now.add({
    months: 3
  });
  return () => <div class="flex flex-col items-center gap-4">
      <RangeCalendar aria-label="Trip dates" maxValue={maxDate} minValue={minDate}>
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
        Select dates between today and {maxDate.toString()}
      </Description>
    </div>;
});
