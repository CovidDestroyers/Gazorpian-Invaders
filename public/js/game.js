
const config = {
	type: Phaser.WEBGL,
	width: 480,
	height: 640,
	
	// ...

	backgroundColor: "black",
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x: 0, y: 0 }
		}
	},
	scene: [
		SceneMain
	],
	pixelArt: true,
	roundPixels: true,
	
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false
};

const game = new Phaser.Game(config);