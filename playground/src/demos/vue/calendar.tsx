import { defineComponent } from 'vue'
import { Calendar } from '@itsjustanks/heroui-vue'
import type { DateValue } from '@internationalized/date'

type CalendarSlot = {
  grid: Array<{ value: DateValue; rows: DateValue[][] }>
  weekDays: string[]
}

export default defineComponent(() => () => (
  <div class="demo-col">
    <Calendar aria-label="Event date">
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
  </div>
))
