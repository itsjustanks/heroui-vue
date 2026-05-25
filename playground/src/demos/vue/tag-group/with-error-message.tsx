import type { Key } from "@itsjustanks/heroui-vue";
import { Description, ErrorMessage, Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { computed, defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(new Set());
  const isInvalid = computed(() => Array.from(selected.value).length === 0);
  return () => <TagGroup selectedKeys={selected.value} selectionMode="multiple" onSelectionChange={keys => selected.value = keys}>
      <Label>Amenities</Label>
      <TagGroup.List>
        <Tag id="laundry">Laundry</Tag>
        <Tag id="fitness">Fitness center</Tag>
        <Tag id="parking">Parking</Tag>
        <Tag id="pool">Swimming pool</Tag>
        <Tag id="breakfast">Breakfast</Tag>
      </TagGroup.List>
      <Description>
        {isInvalid.value ? "Select at least one category" : "Selected: " + Array.from(selected.value).join(", ")}
      </Description>
      <ErrorMessage>{!!isInvalid.value && <>Please select at least one category</>}</ErrorMessage>
    </TagGroup>;
});
export default TagGroupWithErrorMessage;
