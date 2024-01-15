

class Player {

    width = 20;
    height = 20;
    x;y;

    constructor() {
        
        this.x = 0
        this.y = 0

    }

    move(deltaX, deltaY) {
        this.x += deltaX
        this.y += deltaY
    }

    getDrawInfo() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        }
    }


}

