import { defineComponent } from 'vue'
import { RangeCalendar } from '@itsjustanks/heroui-vue'
import type { DateValue } from '@internationalized/date'

type CalendarSlot = {
  grid: Array<{ value: DateValue; rows: DateValue[][] }>
  weekDays: string[]
}

export default defineComponent(() => () => (
  <div class="demo-col">
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
  </div>
))
