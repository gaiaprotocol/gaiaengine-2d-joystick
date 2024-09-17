import { WindowEventNode } from "@gaiaengine/2d";

export default class TwoWayJoystick extends WindowEventNode {
  constructor(
    private onPress: (direction: "up" | "down") => void,
    private onRelease: (direction: "up" | "down") => void,
  ) {
    super();
    this.onWindow("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") this.onPress("up");
      else if (event.key === "ArrowDown") this.onPress("down");
    }).onWindow("keyup", (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") this.onRelease("up");
      else if (event.key === "ArrowDown") this.onRelease("down");
    });
  }
}
