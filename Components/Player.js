

class Player {

    speed = 1;
    width = 20;
    height = 20;
    x;y;
    screenWidth;
    screenHeight;

    constructor(img, screenWidth, screenHeight) {
        
        this.img = img
        this.x = 0
        this.y = 0

        this.screenWidth = screenWidth
        this.screenHeight = screenHeight
    }

    movement(keys) {
        if (keys["ArrowUp"]) this.move(0, -this.speed)
        if (keys["ArrowDown"]) this.move(0, this.speed)
        if (keys["ArrowLeft"]) this.move(-this.speed, 0)
        if (keys["ArrowRight"]) this.move(this.speed, 0)
    }

    move(deltaX, deltaY) {
        if (this.x + deltaX >= 0) {
            if (this.x + deltaX <= this.screenWidth - this.width) {
                this.x += deltaX
            }
        }
        
        if (this.y + deltaY >= 0) {
            if (this.y + deltaY <= this.screenHeight - this.height) {
                this.y += deltaY
            }
        }
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

