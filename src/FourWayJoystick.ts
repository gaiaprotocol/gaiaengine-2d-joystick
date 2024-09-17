import { WindowEventNode } from "@gaiaengine/2d";

export default class FourWayJoystick extends WindowEventNode {
  constructor(
    private onPress: (direction: "up" | "down" | "left" | "right") => void,
    private onRelease: (direction: "up" | "down" | "left" | "right") => void,
  ) {
    super();
    this.onWindow("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") this.onPress("up");
      else if (event.key === "ArrowDown") this.onPress("down");
      else if (event.key === "ArrowLeft") this.onPress("left");
      else if (event.key === "ArrowRight") this.onPress("right");
    }).onWindow("keyup", (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") this.onRelease("up");
      else if (event.key === "ArrowDown") this.onRelease("down");
      else if (event.key === "ArrowLeft") this.onRelease("left");
      else if (event.key === "ArrowRight") this.onRelease("right");
    });
  }
}
