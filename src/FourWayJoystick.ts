import { GameNode } from "@gaiaengine/2d";

export default class FourWayJoystick extends GameNode {
  constructor(
    onPress: (direction: "up" | "down" | "left" | "right") => void,
    onRelease: (direction: "up" | "down" | "left" | "right") => void,
  ) {
    super();
  }
}
