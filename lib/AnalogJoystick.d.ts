import { GameNode } from "@gaiaengine/2d";
export default class AnalogJoystick extends GameNode {
    private onMove;
    private onRelease;
    private keysPressed;
    constructor(onMove: (angle: number) => void, onRelease: () => void);
    private keyDownHandler;
    private keyUpHandler;
    private calculateAngle;
    remove(): void;
}
//# sourceMappingURL=AnalogJoystick.d.ts.map