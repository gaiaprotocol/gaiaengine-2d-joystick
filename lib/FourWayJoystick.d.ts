import { GameNode } from "@gaiaengine/2d";
export default class FourWayJoystick extends GameNode {
    private onPress;
    private onRelease;
    constructor(onPress: (direction: "up" | "down" | "left" | "right") => void, onRelease: (direction: "up" | "down" | "left" | "right") => void);
    private keyDownHandler;
    private keyUpHandler;
    remove(): void;
}
//# sourceMappingURL=FourWayJoystick.d.ts.map