import { Calendar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Calendar aria-label="Custom styled calendar">
      <Calendar.Header>
        <Calendar.NavButton class="text-foreground" slot="previous" />
        <Calendar.YearPickerTrigger class="w-full justify-center">
          <Calendar.YearPickerTriggerHeading class="text-foreground" />
          <Calendar.YearPickerTriggerIndicator class="text-foreground" />
        </Calendar.YearPickerTrigger>
        <Calendar.NavButton class="text-foreground" slot="next" />
      </Calendar.Header>
      <Calendar.Grid>
        <Calendar.GridHeader>
          {day => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
        </Calendar.GridHeader>
        <Calendar.GridBody>{date => <Calendar.Cell date={date} />}</Calendar.GridBody>
      </Calendar.Grid>
      <Calendar.YearPickerGrid>
        <Calendar.YearPickerGridBody>
          {({
        year
      }) => <Calendar.YearPickerCell year={year} />}
        </Calendar.YearPickerGridBody>
      </Calendar.YearPickerGrid>
    </Calendar>);
