import { GameNode } from "@gaiaengine/2d";

export default class TwoWayJoystick extends GameNode {
  constructor(
    onPress: (direction: "up" | "down") => void,
    onRelease: (direction: "up" | "down") => void,
  ) {
    super();
  }
}
