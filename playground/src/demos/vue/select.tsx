import { Label, ListBox, Select } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';

/** Select demo — HeroUI v3 React, for side-by-side parity. */
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('default');
  const variant = example === 'variants' || example === 'on-surface' ? 'secondary' : 'primary';
  const fullWidth = example === 'full-width';
  const disabled = example === 'disabled';
  const multiple = example === 'multiple-select' || example === 'controlled-multiple' || example === 'custom-value-multiple';
  const placeholder = multiple ? 'Select states' : 'Select one';
  return () => <div class={fullWidth ? 'demo-col' : 'demo-row'}>
      <Select class={fullWidth ? 'w-full' : 'w-[256px]'} placeholder={placeholder} variant={variant} fullWidth={fullWidth} isDisabled={disabled} selectionMode={multiple ? 'multiple' : undefined}>
        <Label>{multiple ? 'States' : 'State'}</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="florida" textValue="Florida" isDisabled={example === 'with-disabled-options'}>
              Florida
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="delaware" textValue="Delaware">
              Delaware
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="california" textValue="California" isDisabled={example === 'with-disabled-options'}>
              California
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="texas" textValue="Texas">
              Texas
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="new-york" textValue="New York">
              New York
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="washington" textValue="Washington">
              Washington
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
      {example === 'variants' && <Select class="w-[256px]" placeholder="Secondary" variant="secondary">
          <Label>Variant</Label>
          <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
          <Select.Popover><ListBox><ListBox.Item id="secondary">Secondary<ListBox.ItemIndicator /></ListBox.Item></ListBox></Select.Popover>
        </Select>}
    </div>;
});
