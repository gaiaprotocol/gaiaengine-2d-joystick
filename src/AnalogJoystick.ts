import { GameNode } from "@gaiaengine/2d";

export default class AnalogJoystick extends GameNode {
  constructor(
    onMove: (angle: number) => void,
    onRelease: () => void,
  ) {
    super();
  }
}
