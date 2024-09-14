import { GameNode } from "@gaiaengine/2d";
export default class TwoWayJoystick extends GameNode {
    private onPress;
    private onRelease;
    constructor(onPress: (direction: "up" | "down") => void, onRelease: (direction: "up" | "down") => void);
    private keyDownHandler;
    private keyUpHandler;
    remove(): void;
}
//# sourceMappingURL=TwoWayJoystick.d.ts.map