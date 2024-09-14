import { GameNode } from "@gaiaengine/2d";
export default class FourWayJoystick extends GameNode {
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
        else if (event.key === "ArrowLeft")
            this.onPress("left");
        else if (event.key === "ArrowRight")
            this.onPress("right");
    };
    keyUpHandler = (event) => {
        if (event.key === "ArrowUp")
            this.onRelease("up");
        else if (event.key === "ArrowDown")
            this.onRelease("down");
        else if (event.key === "ArrowLeft")
            this.onRelease("left");
        else if (event.key === "ArrowRight")
            this.onRelease("right");
    };
    remove() {
        window.removeEventListener("keydown", this.keyDownHandler);
        window.removeEventListener("keyup", this.keyUpHandler);
        super.remove();
    }
}
//# sourceMappingURL=FourWayJoystick.js.map