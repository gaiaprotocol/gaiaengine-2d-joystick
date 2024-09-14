import { GameNode } from "@gaiaengine/2d";

export default class FourWayJoystick extends GameNode {
  constructor(
    private onPress: (direction: "up" | "down" | "left" | "right") => void,
    private onRelease: (direction: "up" | "down" | "left" | "right") => void,
  ) {
    super();
    window.addEventListener("keydown", this.keyDownHandler);
    window.addEventListener("keyup", this.keyUpHandler);
  }

  private keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") this.onPress("up");
    else if (event.key === "ArrowDown") this.onPress("down");
    else if (event.key === "ArrowLeft") this.onPress("left");
    else if (event.key === "ArrowRight") this.onPress("right");
  };

  private keyUpHandler = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") this.onRelease("up");
    else if (event.key === "ArrowDown") this.onRelease("down");
    else if (event.key === "ArrowLeft") this.onRelease("left");
    else if (event.key === "ArrowRight") this.onRelease("right");
  };

  public remove(): void {
    window.removeEventListener("keydown", this.keyDownHandler);
    window.removeEventListener("keyup", this.keyUpHandler);
    super.remove();
  }
}
