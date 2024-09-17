import { WindowEventNode } from "@gaiaengine/2d";
export default class FourWayJoystick extends WindowEventNode {
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
            else if (event.key === "ArrowLeft")
                this.onPress("left");
            else if (event.key === "ArrowRight")
                this.onPress("right");
        }).onWindow("keyup", (event) => {
            if (event.key === "ArrowUp")
                this.onRelease("up");
            else if (event.key === "ArrowDown")
                this.onRelease("down");
            else if (event.key === "ArrowLeft")
                this.onRelease("left");
            else if (event.key === "ArrowRight")
                this.onRelease("right");
        });
    }
}
//# sourceMappingURL=FourWayJoystick.js.map