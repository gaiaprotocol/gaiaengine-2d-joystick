import { WindowEventNode } from "@gaiaengine/2d";
export default class TwoWayJoystick extends WindowEventNode {
    private onPress;
    private onRelease;
    constructor(onPress: (direction: "left" | "right") => void, onRelease: (direction: "left" | "right") => void);
}
//# sourceMappingURL=TwoWayJoystick.d.ts.map