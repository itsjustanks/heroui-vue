import { ScrollShadow } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-col">
      <ScrollShadow class="max-h-[200px] w-64 p-4">
        <div>
          {Array.from({
        length: 8
      }).map((_, i) => <p key={i} class="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>)}
        </div>
      </ScrollShadow>
      <ScrollShadow orientation="horizontal" class="max-w-[240px] overflow-x-auto p-4">
        <div class="flex gap-4" style={{
      width: 600
    }}>
          {Array.from({
        length: 6
      }).map((_, i) => <div key={i} class="w-32 shrink-0 rounded border p-3 text-sm">Item {i + 1}</div>)}
        </div>
      </ScrollShadow>
    </div>);
