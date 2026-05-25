import { Calendar, Description } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const now = today(getLocalTimeZone());
  const minDate = now;
  const maxDate = now.add({
    months: 3
  });
  return () => <div class="flex flex-col items-center gap-4">
      <Calendar aria-label="Appointment date" maxValue={maxDate} minValue={minDate}>
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
      <Description class="text-center">
        Select a date between today and {maxDate.toString()}
      </Description>
    </div>;
});
