import { Calendar, Description } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col items-center gap-4">
      <Calendar isReadOnly aria-label="Event date" defaultValue={today(getLocalTimeZone())}>
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
      <Description class="text-center">Calendar is read-only</Description>
    </div>);
