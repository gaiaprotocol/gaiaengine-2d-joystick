import { WindowEventNode } from "@gaiaengine/2d";

export default class AnalogJoystick extends WindowEventNode {
  private keysPressed: Set<string> = new Set();

  constructor(
    private onMove: (angle: number) => void,
    private onRelease: () => void,
  ) {
    super();
    this.onWindow("keydown", (event: KeyboardEvent) => {
      const key = event.key;
      if (
        key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" ||
        key === "ArrowRight"
      ) {
        this.keysPressed.add(key);
        this.calculateAngle();
      }
    }).onWindow("keyup", (event: KeyboardEvent) => {
      const key = event.key;
      if (
        key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" ||
        key === "ArrowRight"
      ) {
        this.keysPressed.delete(key);
        if (this.keysPressed.size === 0) {
          this.onRelease();
        } else {
          this.calculateAngle();
        }
      }
    });
  }

  private calculateAngle() {
    let dx = 0;
    let dy = 0;

    if (this.keysPressed.has("ArrowRight")) dx += 1;
    if (this.keysPressed.has("ArrowLeft")) dx -= 1;
    if (this.keysPressed.has("ArrowDown")) dy += 1;
    if (this.keysPressed.has("ArrowUp")) dy -= 1;

    if (dx !== 0 || dy !== 0) {
      const angle = Math.atan2(dy, dx);
      this.onMove(angle);
    }
  }
}
