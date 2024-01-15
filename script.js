
class Game {
    brett;
    player;

    constructor(container) {

        this.player = new Player()
        this.brett = new Brett(container, 600, 400)

    }

    render() {

        

    }

    start() {



    }

    stop() {



    }
}



const containerEl = document.querySelector("#container")

const game = new Game(containerEl)

game.start()
