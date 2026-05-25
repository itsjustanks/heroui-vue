import type { DateValue } from "@internationalized/date";
import { Button, ButtonGroup, Calendar, Description } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, parseDate, startOfMonth, startOfWeek, today } from "@internationalized/date";
import { useLocale } from "react-aria-components";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const focusedDate = ref(parseDate("2025-12-25"));
  const {
    locale
  } = useLocale();
  return () => <div class="flex flex-col items-center gap-4">
      <ButtonGroup fullWidth size="sm" variant="tertiary">
        <Button onPress={() => {
        const todayDate = today(getLocalTimeZone());
        value.value = todayDate;
        focusedDate.value = todayDate;
      }}>
          Today
        </Button>
        <Button onPress={() => {
        const nextWeekStart = startOfWeek(today(getLocalTimeZone()), locale);
        value.value = nextWeekStart;
        focusedDate.value = nextWeekStart;
      }}>
          Week
        </Button>
        <Button onPress={() => {
        const nextMonthStart = startOfMonth(today(getLocalTimeZone()));
        value.value = nextMonthStart;
        focusedDate.value = nextMonthStart;
      }}>
          Month
        </Button>
      </ButtonGroup>

      <Calendar aria-label="Event date" focusedValue={focusedDate.value} value={value.value} onChange={v => value.value = v} onFocusChange={v => focusedDate.value = v}>
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
        Selected date: {value.value ? value.value.toString() : "(none)"}
      </Description>

      <div class="flex gap-2">
        <Button size="sm" variant="secondary" onPress={() => {
        const todayDate = today(getLocalTimeZone());
        value.value = todayDate;
        focusedDate.value = todayDate;
      }}>
          Set Today
        </Button>
        <Button size="sm" variant="secondary" onPress={() => {
        const christmasDate = parseDate("2025-12-25");
        value.value = christmasDate;
        focusedDate.value = christmasDate;
      }}>
          Set Christmas
        </Button>
        <Button size="sm" variant="tertiary" onPress={() => value.value = null}>
          Clear
        </Button>
      </div>
    </div>;
});
export default Controlled;
