let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,

        extend: {
            makePlayer: makePlayer
        }
    }
};

let game = Phaser.Game(config);

let player;

function preload() {
    this.load.image('player', 'assets/player.png');
}

function create() {
    player = this.makePlayer(100,100);
}

function update() {

}

function makePlayer(x,y) {
    let player = this.add.image(x,y, 'player').setOrigin(0.5,1);

    return player;
}