import type { Key } from "@itsjustanks/heroui-vue";
import { Description, ErrorMessage, Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { computed, defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(new Set());
  const isInvalid = computed(() => Array.from(selected.value).length === 0);
  return () => <TagGroup selectedKeys={selected.value} selectionMode="multiple" onSelectionChange={keys => selected.value = keys}>
      <Label>Required Categories</Label>
      <TagGroup.List>
        <Tag id="news">News</Tag>
        <Tag id="travel">Travel</Tag>
        <Tag id="gaming">Gaming</Tag>
        <Tag id="shopping">Shopping</Tag>
      </TagGroup.List>
      <Description>Select at least one category</Description>
      <ErrorMessage>{!!isInvalid.value && <>Please select at least one category</>}</ErrorMessage>
    </TagGroup>;
});
export default ErrorMessageWithTagGroup;
