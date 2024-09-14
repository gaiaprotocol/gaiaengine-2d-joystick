import { GameNode } from "@gaiaengine/2d";

export default class TwoWayJoystick extends GameNode {
  constructor(
    private onPress: (direction: "up" | "down") => void,
    private onRelease: (direction: "up" | "down") => void,
  ) {
    super();
    window.addEventListener("keydown", this.keyDownHandler);
    window.addEventListener("keyup", this.keyUpHandler);
  }

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") this.onPress("up");
    else if (event.key === "ArrowDown") this.onPress("down");
  };

  private keyUpHandler = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") this.onRelease("up");
    else if (event.key === "ArrowDown") this.onRelease("down");
  };

  public remove(): void {
    window.removeEventListener("keydown", this.keyDownHandler);
    window.removeEventListener("keyup", this.keyUpHandler);
    super.remove();
  }
}
