// this is the main scene of the game where player kills enemies and has 3 lives
class SceneMain extends Phaser.Scene {
	constructor() {
		super({ key: "SceneMain" });
  }
  
  init(data) {
    this.passingData = data;
  }

  preload() {
    // character images here
    this.load.image("sprPlayer", "../assets/content/sprPlayer.png");
    this.load.spritesheet("sprEnemy0", "../assets/content/sprEnemy0.png", {
      frameWidth: 8,
      frameHeight: 8
    });
   
    // laser images here
    this.load.image("sprLaserEnemy", "../assets/content/sprLaserEnemy.png");
    this.load.image("sprLaserPlayer", "../assets/content/sprLaserPlayer.png");

    // audio here
    this.load.audio("laserGun", "../assets/content/laserGun.wav");
    this.load.audio("laserGun2", "../assets/content/laserGun2.wav");
    this.load.audio("laserGunCollision", "../assets/content/laserGunCollision.wav");
  }
  
  // creates game, animation, entities, and initializes functions 
  create() {
    if (Object.getOwnPropertyNames(this.passingData).length == 0 &&
      this.passingData.constructor === Object) {
      
      this.passingData = {
        maxLives: 3,
        lives: 3,
      };
    }

    // sfx
    this.sfx = {
      laserGun: this.sound.add("laserGun"),
      laserGun2: this.sound.add("laserGun2"),
      laserGunCollision: this.sound.add("laserGunCollision")
    };

    // creates enemy sprite animation
    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 10,
      repeat: -1
    });
   
    // creates player
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height - 64
    );


    // initializes player keyboard input 
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // delay inbetween each player shot
    this.playerShootDelay = 30;
    this.playerShootTick = 0;

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
 
    this.lastEnemyMoveDir = "RIGHT";
    this.enemyMoveDir = "LEFT";
    this.enemyRect = new Phaser.Geom.Rectangle(
      0,
      0,
      Math.round((this.game.config.width / 24) * 0.75) * 24,
      Math.round((this.game.config.height / 20) * 0.25) * 20
    );

    // adds enemy sprites to game 
    for (let x = 0; x < Math.round((this.game.config.width / 24) * 0.75); x++) {
      for (let y = 0; y < Math.round((this.game.config.height / 20) * 0.25); y++) {
        const enemy = new Enemy(this, x * 24, 128 + (y * 20), "sprEnemy0");
        enemy.play("sprEnemy0");
        enemy.setScale(2);
        this.enemies.add(enemy);
      }
    }

    // intitiates game functions
    this.updateEnemiesMovement();
    this.updateEnemiesShooting();
    this.updatePlayerMovement();
    this.updatePlayerShooting();
    this.updateLasers();
    this.createLivesIcons();

    // if lasers hit then delete enemy or player etc
    this.physics.add.overlap(this.playerLasers, this.enemies, function(laser, enemy) {
      if (laser) {
        laser.destroy();
        // sfx
        this.sfx.laserGunCollision.play();
      }
      if (enemy) {
        enemy.destroy();
      }
    }, null, this);
    this.physics.add.overlap(this.playerLasers, this.enemyLasers, function(playerLaser, enemyLaser) {
      if (playerLaser) {
        playerLaser.destroy();
        // sfx
        this.sfx.laserGunCollision.play();
      }
      if (enemyLaser) {
        enemyLaser.destroy();
        // sfx
        this.sfx.laserGunCollision.play();
      }
    }, null, this);
    this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
      if (player) {
        player.destroy();
        this.onLifeDown();
      }
    }, null, this);
    this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
      if (player) {
        player.destroy(); 
        this.onLifeDown();
      }
      if (laser) {
        laser.destroy();
        // sfx
        this.sfx.laserGunCollision.play();
      }
    }, null, this);    
  }

  // sets up enemey direction left/right
  setEnemyDirection(direction) {
    this.lastEnemyMoveDir = this.enemyMoveDir;
    this.enemyMoveDir = direction;
  }

  // loops enemies movement and direction
  updateEnemiesMovement() {
    this.enemyMoveTimer = this.time.addEvent({
      delay: 1024,
      callback: function() {
        if (this.enemyMoveDir == "RIGHT") {
          this.enemyRect.x += 6;
          if (this.enemyRect.x + this.enemyRect.width > this.game.config.width - 20) {
            this.setEnemyDirection("DOWN");
          }
        }
        else if (this.enemyMoveDir == "LEFT") {
          this.enemyRect.x -= 6;
        
          if (this.enemyRect.x < 20) {
            this.setEnemyDirection("DOWN");
          }
        }
        else if (this.enemyMoveDir == "DOWN") {
          this.enemyMoveTimer.delay -= 100;
          this.moveEnemiesDown();
        }
        for (let i = this.enemies.getChildren().length - 1; i >= 0; i--) {
          const enemy = this.enemies.getChildren()[i];
          if (this.enemyMoveDir == "RIGHT") {
            enemy.x += 6;
          }
          else if (this.enemyMoveDir == "LEFT") {
            enemy.x -= 6;
          }
        }        
      },
      callbackScope: this,
      loop: true
    });    
  }
  
  // gets enemies to randomly shoot at player
  updateEnemiesShooting() {
    this.time.addEvent({
      delay: 500,
      callback: function() {
        for (let i = 0; i < this.enemies.getChildren().length; i++) {
          const enemy = this.enemies.getChildren()[i];
          if (Phaser.Math.Between(0, 1000) > 995) {
            const laser = new EnemyLaser(this, enemy.x, enemy.y);
            this.enemyLasers.add(laser);
            // add sfx here
            this.sfx.laserGun.play();
          }
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  // gets enemies to move down/left/right towards player
  moveEnemiesDown() {
    for (let i = this.enemies.getChildren().length - 1; i >= 0; i--) {
      const enemy = this.enemies.getChildren()[i];
      enemy.y += 20;
      if (this.lastEnemyMoveDir == "LEFT") {
        this.setEnemyDirection("RIGHT");
      }
      else if (this.lastEnemyMoveDir == "RIGHT") {
        this.setEnemyDirection("LEFT");	
      }
    }
  }
    
  // controls players movement when using arrowkeys
  updatePlayerMovement() {
    this.time.addEvent({
      delay: 60,
      callback: function() {
        if (this.cursors.left.isDown) {
          this.player.x -= 8;
        }
        if (this.cursors.right.isDown) {
          this.player.x += 8;
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  // controls player shooting when pressing spacebar
  updatePlayerShooting() {
    this.time.addEvent({
      delay: 15,
      callback: function() {
        if (this.keySpace.isDown && this.player.active) {
          if (this.playerShootTick < this.playerShootDelay) {
            this.playerShootTick++;
          }
          else {
            const laser = new PlayerLaser(this, this.player.x, this.player.y);
            this.playerLasers.add(laser);
            // add sfx here
            this.sfx.laserGun2.play();
            this.playerShootTick = 0;
          }
        }	
      },
      callbackScope: this,
      loop: true
    });
  }

  updateLasers() {
    this.time.addEvent({
      delay: 30,
      callback: function() {
        for (let i = 0; i < this.playerLasers.getChildren().length; i++) {
          const laser = this.playerLasers.getChildren()[i];
          laser.y -= laser.displayHeight;
          if (laser.y < 16) {
            if (laser) {
              laser.destroy();
            }
          }
        }
      },
      callbackScope: this,
      loop: true
    });
    this.time.addEvent({
      delay: 128,
      callback: function() {
        for (let i = 0; i < this.enemyLasers.getChildren().length; i++) {
          const laser = this.enemyLasers.getChildren()[i];
    
          laser.y += laser.displayHeight;
        }
      },
      callbackScope: this,
      loop: true
    });    
  }
  
  // creates life icons on top left of screen
  createLivesIcons() {
    for (let i = 0; i < this.passingData.lives; i++) {
      const icon = this.add.sprite(
        32 + (i * 32),
        this.game.config.height - 600,
        "sprPlayer"
      );
      icon.setScale(2);
      icon.setDepth(5);
    }
  }
    
  // when losing lives/ when 0 lives left
  onLifeDown() {
    if (this.passingData.lives === 0) {
      this.textGameOver = this.add.text(
        this.game.config.width * 0.5,
        128,
        "YOU LOSE",
        {
          fontFamily: "Arcadepix",
          fontSize: 60,
          align: "center"
        }
      );
      this.textGameOver.setOrigin(0.5);
    }
    this.time.addEvent({
      delay: 3000,
      callback: function() {
        if (this.passingData.lives > 0) {
          this.passingData.lives--;
          this.scene.start("SceneMain", this.passingData);
        }
        else {
          this.scene.start("SceneMain", { });
        }
      },
      callbackScope: this,
      loop: false
    });
  }

}
