import { Button, ButtonGroup } from "@itsjustanks/heroui-vue";
import { currentExample } from '../shared';
import { defineComponent } from "vue";
export default defineComponent(() => {
  const example = currentExample('basic');
  const variant = example === 'variants' ? 'outline' : undefined;
  const size = example === 'sizes' ? 'sm' : undefined;
  const fullWidth = example === 'full-width';
  const orientation = example === 'orientation' ? 'vertical' : 'horizontal';
  const disabled = example === 'disabled';
  const showSeparator = example !== 'without-separator';
  return () => <div class="demo-col">
      <div class="demo-row">
        <ButtonGroup variant={variant} size={size} fullWidth={fullWidth} orientation={orientation} isDisabled={disabled}>
          <Button>Previous</Button>
          <Button>
            {showSeparator && <ButtonGroup.Separator />}
            Next
          </Button>
        </ButtonGroup>
      </div>
      {example === 'variants' && <div class="demo-row">
        <ButtonGroup variant="tertiary">
          <Button>Left</Button>
          <Button>
            <ButtonGroup.Separator />
            Center
          </Button>
          <Button>
            <ButtonGroup.Separator />
            Right
          </Button>
        </ButtonGroup>
      </div>}
      {example === 'variants' && <div class="demo-row">
        <ButtonGroup variant="outline">
          <Button>Save</Button>
          <Button>
            <ButtonGroup.Separator />
            Share
          </Button>
          <Button>
            <ButtonGroup.Separator />
            Export
          </Button>
        </ButtonGroup>
      </div>}
    </div>;
});
