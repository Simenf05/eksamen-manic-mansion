
class Game {
    brett;
    player;
    gameInterval;

    constructor(container, playerImg, backgroundImg) {

        this.player = new Player(playerImg, 600, 400)
        this.brett = new Brett(container, backgroundImg, 600, 400)

        this.keys = {}
        document.onkeydown = (e) => {this.keys[e.key] = true}
        document.onkeyup = (e) => {this.keys[e.key] = false}
    }

    render() {

        const drawArr = [this.player.getDrawInfo()]
        this.brett.render(drawArr)

    }

    movement() {

        this.player.movement(this.keys)

    }

    start() {
        this.gameInterval = setInterval(() => {
            
            this.render()
            this.movement()

        }, 5);
    }

    stop() {

        clearInterval(this.gameInterval)

    }
}



const containerEl = document.querySelector("#container")
const playerImgEl = document.querySelector("#playerImg")
const backgroundImgEl = document.querySelector("#backgroundImg")

const game = new Game(containerEl, playerImgEl, backgroundImgEl)

game.start()
