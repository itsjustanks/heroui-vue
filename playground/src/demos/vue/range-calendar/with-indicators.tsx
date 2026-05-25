import { RangeCalendar } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, isToday } from "@internationalized/date";
import { defineComponent } from "vue";
const datesWithEvents = [3, 7, 12, 15, 21, 28];
export default defineComponent(() => () => <RangeCalendar aria-label="Trip dates">
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
          {date => <RangeCalendar.Cell date={date}>
              {({
          formattedDate
        }) => <>
                  {formattedDate}
                  {(isToday(date, getLocalTimeZone()) || datesWithEvents.includes(date.day)) && <RangeCalendar.CellIndicator />}
                </>}
            </RangeCalendar.Cell>}
        </RangeCalendar.GridBody>
      </RangeCalendar.Grid>
    </RangeCalendar>);
