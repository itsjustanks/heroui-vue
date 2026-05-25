import { ScrollShadow } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="w-full p-0 sm:max-w-sm">
      <ScrollShadow hideScrollBar class="max-h-[240px] p-4">
        <div class="space-y-4">
          {Array.from({
        length: 10
      }).map((_, idx) => <p key={`scroll-shadow-lorem-content-${idx}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
              Morbi accumsan cursus enim, sed ultricies sapien.
            </p>)}
        </div>
      </ScrollShadow>
    </div>);
