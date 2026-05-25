import {Label, Switch} from "@heroui/react";

function CustomRenderFunction() {
  return (
    <Switch render={(props) => <label {...props} data-custom="foo" />}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Label className="text-sm">Enable notifications</Label>
    </Switch>
  );
}

export default CustomRenderFunction;
