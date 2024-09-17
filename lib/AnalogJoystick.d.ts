import { WindowEventNode } from "@gaiaengine/2d";
export default class AnalogJoystick extends WindowEventNode {
    private onMove;
    private onRelease;
    private keysPressed;
    constructor(onMove: (angle: number) => void, onRelease: () => void);
    private calculateAngle;
}
//# sourceMappingURL=AnalogJoystick.d.ts.map