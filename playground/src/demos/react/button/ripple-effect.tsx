import {Button} from "@heroui/react";
import {Ripple} from "m3-ripple";

import "m3-ripple/ripple.css";

function RippleEffect() {
  return (
    <Button variant="secondary">
      <Ripple />
      Click me
    </Button>
  );
}

export default RippleEffect;
