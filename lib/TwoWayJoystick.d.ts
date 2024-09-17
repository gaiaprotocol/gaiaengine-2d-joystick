import { WindowEventNode } from "@gaiaengine/2d";
export default class TwoWayJoystick extends WindowEventNode {
    private onPress;
    private onRelease;
    constructor(onPress: (direction: "up" | "down") => void, onRelease: (direction: "up" | "down") => void);
}
//# sourceMappingURL=TwoWayJoystick.d.ts.map