

class Ghost {

    speed = 1;
    width = 20;
    height = 20;
    img;
    x;
    y;
    screenWidth;
    screenHeight;

    constructor(img, screenWidth, screenHeight) {

        this.img = img
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight

        this.x = this.screenWidth - this.width
        this.y = (this.screenHeight - this.height) / 2

    }

    movement() {

    }

    changeDirection() {

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