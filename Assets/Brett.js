

class Brett {

    canvas;
    ctx;


    constructor(container, width, height) {

        this.canvas = document.createElement("canvas")
        this.canvas.width = width
        this.canvas.height = height
        this.canvas.style.border = "1px solid #000000"
        this.ctx = this.canvas.getContext("2d")

        container.appendChild(this.canvas)
    }


    



}