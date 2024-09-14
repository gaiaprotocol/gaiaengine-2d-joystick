import { GameNode } from "@gaiaengine/2d";
export default class AnalogJoystick extends GameNode {
    onMove;
    onRelease;
    keysPressed = new Set();
    constructor(onMove, onRelease) {
        super();
        this.onMove = onMove;
        this.onRelease = onRelease;
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }
    keyDownHandler = (event) => {
        const key = event.key;
        if (key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" ||
            key === "ArrowRight") {
            this.keysPressed.add(key);
            this.calculateAngle();
        }
    };
    keyUpHandler = (event) => {
        const key = event.key;
        if (key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" ||
            key === "ArrowRight") {
            this.keysPressed.delete(key);
            if (this.keysPressed.size === 0) {
                this.onRelease();
            }
            else {
                this.calculateAngle();
            }
        }
    };
    calculateAngle() {
        let dx = 0;
        let dy = 0;
        if (this.keysPressed.has("ArrowRight"))
            dx += 1;
        if (this.keysPressed.has("ArrowLeft"))
            dx -= 1;
        if (this.keysPressed.has("ArrowDown"))
            dy += 1;
        if (this.keysPressed.has("ArrowUp"))
            dy -= 1;
        if (dx !== 0 || dy !== 0) {
            const angle = Math.atan2(dy, dx);
            this.onMove(angle);
        }
    }
    remove() {
        window.removeEventListener("keydown", this.keyDownHandler);
        window.removeEventListener("keyup", this.keyUpHandler);
        super.remove();
    }
}
//# sourceMappingURL=AnalogJoystick.js.map