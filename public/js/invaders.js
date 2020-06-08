const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,

    extend: {
      makePlayer
    }
  }
};

const game = Phaser.Game(config);

let player;

function preload() {
  this.load.image('player', '../assets/20d1yEJ.png');
}

function create() {
  player = this.makePlayer(100, 100);
}

function update() {}

function makePlayer(x, y) {
  const player = this.add.image(x, y, 'player').setOrigin(0.5, 1);

  return player;
}
