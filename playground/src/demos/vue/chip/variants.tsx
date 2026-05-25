import { CircleDashed } from "@gravity-ui/icons";
import { Chip, Separator } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const sizes = ["lg", "md", "sm"] as const;
  const variants = ["primary", "secondary", "tertiary", "soft"] as const;
  const colors = ["accent", "default", "success", "warning", "danger"] as const;
  return () => <div class="flex flex-col gap-8 overflow-x-auto">
      {sizes.map((size, index) => <React.Fragment key={size}>
          <div class="flex flex-col gap-4">
            <h3 class="text-sm font-semibold text-muted capitalize">{size}</h3>
            {/* Color labels header */}
            <div class="flex items-center gap-3">
              <div class="w-24 shrink-0" />
              {colors.map(color => <div key={color} class="flex shrink-0 items-center justify-center" style={{
            width: "130px"
          }}>
                  <span class="text-xs text-muted capitalize">{color}</span>
                </div>)}
            </div>
            <div class="flex flex-col gap-3">
              {variants.map(variant => <div key={variant} class="flex items-center gap-3">
                  <div class="w-24 shrink-0 text-sm text-muted capitalize">{variant}</div>
                  {colors.map(color => <div key={color} class="flex shrink-0 items-center justify-center" style={{
              width: "130px"
            }}>
                      <Chip color={color} size={size} variant={variant}>
                        <CircleDashed />
                        <Chip.Label>Label</Chip.Label>
                        <CircleDashed />
                      </Chip>
                    </div>)}
                </div>)}
            </div>
          </div>
          {index < sizes.length - 1 && <Separator />}
        </React.Fragment>)}
    </div>;
});
