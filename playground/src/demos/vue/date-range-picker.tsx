import { defineComponent } from 'vue'
import {
  DateField,
  DateRangePicker,
  Label,
  RangeCalendar,
} from '@itsjustanks/heroui-vue'
import type { DateValue } from '@internationalized/date'

type Segment = { part: string; value: string }
type CalendarSlot = {
  grid: Array<{ value: DateValue; rows: DateValue[][] }>
  weekDays: string[]
}

/** DateRangePicker demo — Vue TSX, heroui-vue compound API. Composes the popover
 *  with the standalone RangeCalendar, matching HeroUI v3 React. Inside a
 *  DateRangePicker the RangeCalendar root renders reka-ui's picker-scoped range
 *  calendar automatically. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <DateRangePicker class="w-72" startName="startDate" endName="endDate">
      <Label>Trip dates</Label>
      <DateField.Group fullWidth>
        <DateField.Input slot="start">
          {{
            default: (segment: Segment) => <DateField.Segment segment={segment} />,
          }}
        </DateField.Input>
        <DateRangePicker.RangeSeparator />
        <DateField.Input slot="end">
          {{
            default: (segment: Segment) => <DateField.Segment segment={segment} />,
          }}
        </DateField.Input>
        <DateField.Suffix>
          <DateRangePicker.Trigger>
            <DateRangePicker.TriggerIndicator />
          </DateRangePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DateRangePicker.Popover>
        <RangeCalendar aria-label="Trip dates">
          {{
            default: ({ grid, weekDays }: CalendarSlot) => (
              <>
                <RangeCalendar.Header>
                  <RangeCalendar.Heading />
                  <RangeCalendar.NavButton slot="previous" />
                  <RangeCalendar.NavButton slot="next" />
                </RangeCalendar.Header>
                {grid.map((month) => (
                  <RangeCalendar.Grid key={month.value.toString()}>
                    <RangeCalendar.GridHeader>
                      <RangeCalendar.GridRow>
                        {weekDays.map((day) => (
                          <RangeCalendar.HeaderCell key={day}>{day}</RangeCalendar.HeaderCell>
                        ))}
                      </RangeCalendar.GridRow>
                    </RangeCalendar.GridHeader>
                    <RangeCalendar.GridBody>
                      {month.rows.map((week, i) => (
                        <RangeCalendar.GridRow key={i}>
                          {week.map((day) => (
                            <RangeCalendar.Cell
                              key={day.toString()}
                              date={day}
                              month={month.value}
                            />
                          ))}
                        </RangeCalendar.GridRow>
                      ))}
                    </RangeCalendar.GridBody>
                  </RangeCalendar.Grid>
                ))}
              </>
            )
          }}
        </RangeCalendar>
      </DateRangePicker.Popover>
    </DateRangePicker>
  </div>
))
