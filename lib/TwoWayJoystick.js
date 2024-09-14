import { GameNode } from "@gaiaengine/2d";
export default class TwoWayJoystick extends GameNode {
    onPress;
    onRelease;
    constructor(onPress, onRelease) {
        super();
        this.onPress = onPress;
        this.onRelease = onRelease;
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }
    keyDownHandler = (event) => {
        if (event.key === "ArrowUp")
            this.onPress("up");
        else if (event.key === "ArrowDown")
            this.onPress("down");
    };
    keyUpHandler = (event) => {
        if (event.key === "ArrowUp")
            this.onRelease("up");
        else if (event.key === "ArrowDown")
            this.onRelease("down");
    };
    remove() {
        window.removeEventListener("keydown", this.keyDownHandler);
        window.removeEventListener("keyup", this.keyUpHandler);
        super.remove();
    }
}
//# sourceMappingURL=TwoWayJoystick.js.map