import { WindowEventNode } from "@gaiaengine/2d";
export default class FourWayJoystick extends WindowEventNode {
    private onPress;
    private onRelease;
    constructor(onPress: (direction: "up" | "down" | "left" | "right") => void, onRelease: (direction: "up" | "down" | "left" | "right") => void);
}
//# sourceMappingURL=FourWayJoystick.d.ts.map