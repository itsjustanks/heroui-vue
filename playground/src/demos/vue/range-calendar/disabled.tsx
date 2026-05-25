import { Description, RangeCalendar } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col items-center gap-4">
      <RangeCalendar isDisabled aria-label="Trip dates">
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
      <Description class="text-center">Range calendar is disabled</Description>
    </div>);
