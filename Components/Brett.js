

class Brett {

    canvas;
    ctx;
    backgroundImg;


    constructor(container, backgroundImg, width, height) {

        this.backgroundImg = backgroundImg

        this.canvas = document.createElement("canvas")
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style.border = "1px solid #000000"
        this.ctx = this.canvas.getContext("2d")

        container.appendChild(this.canvas)
    }

    render(drawArr) {

        this.ctx.drawImage(this.backgroundImg, 0, 0)

        drawArr.forEach(info => {
            this.draw(info)
        });

    }

    draw(info) {
        this.ctx.drawImage(info.img, info.x, info.y, info.width, info.height)
    }


}