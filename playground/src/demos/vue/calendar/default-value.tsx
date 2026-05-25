import { Calendar } from "@itsjustanks/heroui-vue";
import { parseDate } from "@internationalized/date";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Calendar aria-label="Event date" defaultValue={parseDate("2025-02-14")}>
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
    </Calendar>);
