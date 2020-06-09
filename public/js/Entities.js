class Entity extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.scene.add.existing(this);
		this.scene.physics.world.enableBody(this, 0);
	}
}

class Player extends Entity {
	constructor(scene, x, y) {
		super(scene, x, y, "sprPlayer");
		this.setScale(2);
	}
}

class PlayerLaser extends Entity {
	constructor(scene, x, y) {
		super(scene, x, y, "sprLaserPlayer");
	}
}

class Enemy extends Entity {
	constructor(scene, x, y, key) {
		super(scene, x, y, key);
		this.setOrigin(0);
	}
}

class EnemyLaser extends Entity {
	constructor(scene, x, y, key) {
		super(scene, x,y, "sprLaserEnemy");
	}
}