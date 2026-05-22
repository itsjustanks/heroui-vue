import { defineComponent } from 'vue'
import { Calendar, DateField, DatePicker, Label } from '@itsjustanks/heroui-vue'
import type { DateValue } from '@internationalized/date'

type Segment = { part: string; value: string }
type CalendarSlot = {
  grid: Array<{ value: DateValue; rows: DateValue[][] }>
  weekDays: string[]
}

/** DatePicker demo — Vue TSX, heroui-vue compound API. Composes the popover
 *  with the standalone Calendar, matching HeroUI v3 React. Inside a DatePicker
 *  the Calendar root renders reka-ui's picker-scoped calendar automatically. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <DatePicker class="w-64" name="date">
      <Label>Date</Label>
      <DateField.Group fullWidth>
        <DateField.Input>
          {{
            default: (segment: Segment) => <DateField.Segment segment={segment} />,
          }}
        </DateField.Input>
        <DateField.Suffix>
          <DatePicker.Trigger>
            <DatePicker.TriggerIndicator />
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover>
        <Calendar aria-label="Date">
          {{
            default: ({ grid, weekDays }: CalendarSlot) => (
              <>
                <Calendar.Header>
                  <Calendar.Heading />
                  <Calendar.NavButton slot="previous" />
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                {grid.map((month) => (
                  <Calendar.Grid key={month.value.toString()}>
                    <Calendar.GridHeader>
                      <Calendar.GridRow>
                        {weekDays.map((day) => (
                          <Calendar.HeaderCell key={day}>{day}</Calendar.HeaderCell>
                        ))}
                      </Calendar.GridRow>
                    </Calendar.GridHeader>
                    <Calendar.GridBody>
                      {month.rows.map((week, i) => (
                        <Calendar.GridRow key={i}>
                          {week.map((day) => (
                            <Calendar.Cell
                              key={day.toString()}
                              date={day}
                              month={month.value}
                            />
                          ))}
                        </Calendar.GridRow>
                      ))}
                    </Calendar.GridBody>
                  </Calendar.Grid>
                ))}
              </>
            )
          }}
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
  </div>
))
