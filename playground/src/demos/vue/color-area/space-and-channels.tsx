import type { ColorSpace, Key } from "@itsjustanks/heroui-vue";
import { ColorArea, Label, ListBox, Select, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
type ColorChannel = "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue";
interface ChannelOption {
  id: ColorChannel;
  name: string;
}
const colorSpaces: Array<{
  id: ColorSpace;
  name: string;
}> = [{
  id: "rgb",
  name: "RGB"
}, {
  id: "hsl",
  name: "HSL"
}, {
  id: "hsb",
  name: "HSB"
}];
const channelsBySpace: Record<ColorSpace, ChannelOption[]> = {
  hsb: [{
    id: "hue",
    name: "Hue"
  }, {
    id: "saturation",
    name: "Saturation"
  }, {
    id: "brightness",
    name: "Brightness"
  }],
  hsl: [{
    id: "hue",
    name: "Hue"
  }, {
    id: "saturation",
    name: "Saturation"
  }, {
    id: "lightness",
    name: "Lightness"
  }],
  rgb: [{
    id: "red",
    name: "Red"
  }, {
    id: "green",
    name: "Green"
  }, {
    id: "blue",
    name: "Blue"
  }]
};
export default defineComponent(() => {
  const colorSpace = ref("hsb");
  const color = ref(() => parseColor("hsb(219, 58%, 93%)"));
  const channels = channelsBySpace[colorSpace.value];
  const defaultX = colorSpace.value === "rgb" ? "blue" : "saturation";
  const defaultY = colorSpace.value === "rgb" ? "green" : colorSpace.value === "hsl" ? "lightness" : "brightness";
  const xChannel = ref(defaultX);
  const yChannel = ref(defaultY);
  const handleColorSpaceChange = (newSpace: Key | null) => {
    if (!newSpace) return;
    const space = newSpace as ColorSpace;
    colorSpace.value = space;
    // Reset channels to appropriate defaults for the new color space
    if (space === "rgb") {
      xChannel.value = "blue";
      yChannel.value = "green";
    } else if (space === "hsl") {
      xChannel.value = "saturation";
      yChannel.value = "lightness";
    } else {
      xChannel.value = "saturation";
      yChannel.value = "brightness";
    }
  };

  // Filter out the other channel from options (can't have same channel on both axes)
  const xChannelOptions = channels.filter(c => c.id !== yChannel.value);
  const yChannelOptions = channels.filter(c => c.id !== xChannel.value);
  return () => <div class="flex flex-col items-center gap-6">
      {/* Controls */}
      <div class="flex gap-4">
        {/* Color Space Select */}
        <Select class="w-32" value={colorSpace.value} onChange={handleColorSpaceChange}>
          <Label>Color Space</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {colorSpaces.map(space => <ListBox.Item key={space.id} id={space.id} textValue={space.name}>
                  {space.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* X Channel Select */}
        <Select class="w-36" value={xChannel.value} onChange={value => value && (xChannel.value = value as ColorChannel)}>
          <Label>X Axis</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {xChannelOptions.map(channel => <ListBox.Item key={channel.id} id={channel.id} textValue={channel.name}>
                  {channel.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>

        {/* Y Channel Select */}
        <Select class="w-36" value={yChannel.value} onChange={value => value && (yChannel.value = value as ColorChannel)}>
          <Label>Y Axis</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {yChannelOptions.map(channel => <ListBox.Item key={channel.id} id={channel.id} textValue={channel.name}>
                  {channel.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
      {/* Color Area */}
      <ColorArea colorSpace={colorSpace.value} value={color.value} xChannel={xChannel.value} yChannel={yChannel.value} onChange={v => color.value = v}>
        <ColorArea.Thumb />
      </ColorArea>

      {/* Color Value Display */}
      <div class="flex items-center gap-3">
        <div class="size-8 rounded-md border border-default" style={{
        backgroundColor: color.value.toString("css")
      }} />
        <code class="rounded bg-default/50 px-2 py-1 text-sm">
          {color.value.toString(colorSpace.value)}
        </code>
      </div>
    </div>;
});
export default ColorAreaSpaceAndChannels;
