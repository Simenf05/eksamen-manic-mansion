

class Player {

    speed = 3;
    width = 20;
    height = 20;
    x;y;

    constructor(img) {
        
        this.img = img
        this.x = 0
        this.y = 0

    }

    movement(keys) {
        if (keys["ArrowUp"]) this.move(0, -this.speed)
        if (keys["ArrowDown"]) this.move(0, this.speed)
        if (keys["ArrowLeft"]) this.move(-this.speed, 0)
        if (keys["ArrowRight"]) this.move(this.speed, 0)
    }

    move(deltaX, deltaY) {
        this.x += deltaX
        this.y += deltaY
    }

    getDrawInfo() {
        return {
            img: this.img,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        }
    }


}

