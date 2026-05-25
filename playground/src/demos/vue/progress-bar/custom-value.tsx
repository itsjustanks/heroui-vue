import { Label, ListBox, NumberField, ProgressBar, Select, Separator } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
const formatStyleOptions: {
  label: string;
  value: string;
}[] = [{
  label: "Currency",
  value: "currency"
}, {
  label: "Percent",
  value: "percent"
}, {
  label: "Decimal",
  value: "decimal"
}, {
  label: "Unit",
  value: "unit"
}];
const formatOptionsMap: Record<string, Intl.NumberFormatOptions> = {
  currency: {
    currency: "USD",
    style: "currency"
  },
  decimal: {
    style: "decimal"
  },
  percent: {
    style: "percent"
  },
  unit: {
    style: "unit",
    unit: "mile"
  }
};
export default defineComponent(() => {
  const value = ref(750);
  const minValue = ref(0);
  const maxValue = ref(1000);
  const format = ref("percent");
  return () => <div class="flex w-full flex-col gap-6 md:flex-row md:items-center md:gap-10">
      <div class="flex w-full max-w-md flex-1 justify-center">
        <ProgressBar aria-label="Revenue" class="w-full max-w-52" formatOptions={formatOptionsMap[format.value]} maxValue={maxValue.value} minValue={minValue.value} value={value.value}>
          <Label>Progress</Label>
          <ProgressBar.Output />
          <ProgressBar.Track>
            <ProgressBar.Fill />
          </ProgressBar.Track>
        </ProgressBar>
      </div>

      <Separator class="md:hidden" />
      <Separator class="hidden md:block" orientation="vertical" />

      <div class="flex max-w-52 flex-col gap-3">
        <Label class="text-xs font-medium text-muted">Options</Label>

        <NumberField maxValue={maxValue.value} minValue={minValue.value} value={value.value} variant="secondary" onChange={v => value.value = v}>
          <Label>Value</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>

        <NumberField maxValue={maxValue.value - 1} minValue={0} value={minValue.value} variant="secondary" onChange={v => {
        minValue.value = v;
        if (value.value < v) value.value = v;
      }}>
          <Label>Min Value</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>

        <NumberField maxValue={2000} minValue={minValue.value + 1} value={maxValue.value} variant="secondary" onChange={v => {
        maxValue.value = v;
        if (value.value > v) value.value = v;
      }}>
          <Label>Max Value</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input />
            <NumberField.IncrementButton />
          </NumberField.Group>
        </NumberField>

        <Select value={format.value} variant="secondary" onChange={key => format.value = key as string}>
          <Label>Format</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {formatStyleOptions.map(option => <ListBox.Item key={option.value} id={option.value} textValue={option.label}>
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>;
});
