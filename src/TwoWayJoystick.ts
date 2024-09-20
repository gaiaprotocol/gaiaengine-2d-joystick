import { WindowEventNode } from "@gaiaengine/2d";

export default class TwoWayJoystick extends WindowEventNode {
  constructor(
    private onPress: (direction: "left" | "right") => void,
    private onRelease: (direction: "left" | "right") => void,
  ) {
    super();
    this.onWindow("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") this.onPress("left");
      else if (event.key === "ArrowRight") this.onPress("right");
    }).onWindow("keyup", (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") this.onRelease("left");
      else if (event.key === "ArrowRight") this.onRelease("right");
    });
  }
}
