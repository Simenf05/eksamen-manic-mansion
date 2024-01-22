
class Game {
    brett;
    player;
    gameInterval;
    ghostCount = 1;

    brettWidth = 600;
    brettHeight = 400;

    constructor(container, playerImg, backgroundImg, ghostImg) {

        this.player = new Player(playerImg, this.brettWidth, this.brettHeight)
        this.brett = new Brett(container, backgroundImg, this.brettWidth, this.brettHeight)

        this.ghosts = Array.from({length: this.ghostCount}, () => new Ghost(ghostImg, this.brettWidth, this.brettHeight))

        console.log(this.ghosts);

        this.keys = {}
        document.onkeydown = (e) => {this.keys[e.key] = true}
        document.onkeyup = (e) => {this.keys[e.key] = false}
    }

    render() {

        const drawArr = [this.player.getDrawInfo(), ...this.ghosts.map(ghost => ghost.getDrawInfo())]
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
const ghostImgEl = document.querySelector("#ghostImg")

const game = new Game(containerEl, playerImgEl, backgroundImgEl)

game.start()
