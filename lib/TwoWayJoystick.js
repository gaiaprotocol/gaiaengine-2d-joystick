import { WindowEventNode } from "@gaiaengine/2d";
export default class TwoWayJoystick extends WindowEventNode {
    onPress;
    onRelease;
    constructor(onPress, onRelease) {
        super();
        this.onPress = onPress;
        this.onRelease = onRelease;
        this.onWindow("keydown", (event) => {
            if (event.key === "ArrowUp")
                this.onPress("up");
            else if (event.key === "ArrowDown")
                this.onPress("down");
        }).onWindow("keyup", (event) => {
            if (event.key === "ArrowUp")
                this.onRelease("up");
            else if (event.key === "ArrowDown")
                this.onRelease("down");
        });
    }
}
//# sourceMappingURL=TwoWayJoystick.js.map