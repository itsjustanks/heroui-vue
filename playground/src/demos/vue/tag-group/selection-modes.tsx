import type { Key } from "@itsjustanks/heroui-vue";
import { Description, Label, Tag, TagGroup } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const singleSelected = ref(new Set(["news"]));
  const multipleSelected = ref(new Set(["news", "travel"]));
  return () => <div class="flex flex-col gap-8">
      <TagGroup selectedKeys={singleSelected.value} selectionMode="single" onSelectionChange={keys => singleSelected.value = keys}>
        <Label>Single Selection</Label>
        <TagGroup.List>
          <Tag>News</Tag>
          <Tag>Travel</Tag>
          <Tag>Gaming</Tag>
          <Tag>Shopping</Tag>
        </TagGroup.List>
        <Description>Choose one category</Description>
      </TagGroup>

      <TagGroup selectedKeys={multipleSelected.value} selectionMode="multiple" onSelectionChange={keys => multipleSelected.value = keys}>
        <Label>Multiple Selection</Label>
        <TagGroup.List>
          <Tag>News</Tag>
          <Tag>Travel</Tag>
          <Tag>Gaming</Tag>
          <Tag>Shopping</Tag>
        </TagGroup.List>
        <Description>Choose multiple categories</Description>
      </TagGroup>
    </div>;
});
export default TagGroupSelectionModes;
