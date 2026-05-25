import type { Key } from "@itsjustanks/heroui-vue";
import { Description, Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(new Set(["news", "travel"]));
  return () => <div class="flex flex-col gap-3">
      <TagGroup selectedKeys={selected.value} selectionMode="multiple" onSelectionChange={keys => selected.value = keys}>
        <Label>Categories (controlled)</Label>
        <TagGroup.List>
          <Tag id="news">News</Tag>
          <Tag id="travel">Travel</Tag>
          <Tag id="gaming">Gaming</Tag>
          <Tag id="shopping">Shopping</Tag>
        </TagGroup.List>
        <Description>
          Selected: {Array.from(selected.value).length > 0 ? Array.from(selected.value).join(", ") : "None"}
        </Description>
      </TagGroup>
    </div>;
});
