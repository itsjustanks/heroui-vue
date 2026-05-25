import {Switch} from "@heroui/react";

function WithoutLabel() {
  return (
    <Switch aria-label="Enable notifications">
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch>
  );
}

export default WithoutLabel;
