import Phaser from 'phaser'
import * as globalConstants from '../globalConstants'

// Entities
import Asteroid from '../entities/Asteroid'
import Ship from '../entities/Ship'
import Bullet from '../entities/Bullet'

// Managers
import InputManager from '../managers/inputManager'

export default class extends Phaser.State {

  create() {
    // this.key_left
    // this.key_right
    // this.key_thrust
    // this.key_fire

    // this.bulletGroup
    // this.bulletInterval = 0

    // this.asteroidGroup
    // this.asteroidsCount = globalConstants.asteroidProperties.startingAsteroids

    // this.shipLives = globalConstants.shipProperties.startingLives
    // this.tf_lives

    // this.score = 0
    // this.tf_score

    // this.sndDestroyed
    // this.sndFire

    // this.initGraphics()
    // this.initSounds()
    // this.initPhysics()
    // this.initKeyboard()
    // this.resetAsteroids()

    this.game.ship = new Ship(this.game, globalConstants.shipProperties.startX, globalConstants.shipProperties.startY)
    this.game.ship.resetShip()
    this.game.camera.follow(this.game.ship);

    this.game.inputManager = new InputManager(this.game)

    // this.shipSprite
    // this.shipIsInvulnerable
  }

  update() {

    this.game.inputManager.update()
      // this.checkPlayerInput()
      // this.checkBoundaries(this.shipSprite)
      // this.bulletGroup.forEachExists(this.checkBoundaries, this)
      // this.asteroidGroup.forEachExists(this.checkBoundaries, this)

    // game.physics.arcade.overlap(this.bulletGroup, this.asteroidGroup, this.asteroidCollision, null, this)
    // game.physics.arcade.overlap(this.shipSprite, this.asteroidGroup, this.asteroidCollision, null, this)

    // if (!this.shipIsInvulnerable) {
    //   game.physics.arcade.overlap(this.shipSprite, this.asteroidGroup, this.asteroidCollision, null, this)
    // }
  }

  // initGraphics() {
  //   this.shipSprite = game.add.sprite(globalConstants.shipProperties.startX, globalConstants.shipProperties.startY, globalConstants.graphicAssets.ship.name);
  //   this.shipSprite.angle = -90;
  //   this.shipSprite.anchor.set(0.5, 0.5);

  //   this.bulletGroup = game.add.group();
  //   this.asteroidGroup = game.add.group();

  //   this.tf_lives = game.add.text(20, 10, globalConstants.shipProperties.startingLives, globalConstants.fontProperties.counterFontStyle);

  //   this.tf_score = game.add.text(globalConstants.gameProperties.screenWidth - 20, 10, "0", globalConstants.fontProperties.counterFontStyle);
  //   this.tf_score.align = 'right';
  //   this.tf_score.anchor.set(1, 0);
  // }

  // initSounds() {
  //   this.sndDestroyed = game.add.audio(globalConstants.soundAssets.destroyed.name);
  //   this.sndFire = game.add.audio(globalConstants.soundAssets.fire.name);
  // }

  // initPhysics() {
  //   game.physics.startSystem(Phaser.Physics.ARCADE);

  //   game.physics.enable(this.shipSprite, Phaser.Physics.ARCADE);
  //   this.shipSprite.body.drag.set(globalConstants.shipProperties.drag);
  //   this.shipSprite.body.maxVelocity.set(globalConstants.shipProperties.maxVelocity);

  //   this.bulletGroup.enableBody = true;
  //   this.bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;
  //   this.bulletGroup.createMultiple(globalConstants.bulletProperties.maxCount, globalConstants.graphicAssets.bullet.name);
  //   this.bulletGroup.setAll('anchor.x', 0.5);
  //   this.bulletGroup.setAll('anchor.y', 0.5);
  //   this.bulletGroup.setAll('lifespan', globalConstants.bulletProperties.lifespan);

  //   this.asteroidGroup.enableBody = true;
  //   this.asteroidGroup.physicsBodyType = Phaser.Physics.ARCADE;
  // }

  // initKeyboard() {
  //   this.key_left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  //   this.key_right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  //   this.key_thrust = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  //   this.key_fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  // }

  // checkPlayerInput() {
  //   if (this.key_left.isDown) {
  //     this.shipSprite.body.angularVelocity = -globalConstants.shipProperties.angularVelocity;
  //   } else if (this.key_right.isDown) {
  //     this.shipSprite.body.angularVelocity = globalConstants.shipProperties.angularVelocity;
  //   } else {
  //     this.shipSprite.body.angularVelocity = 0;
  //   }

  //   if (this.key_thrust.isDown) {
  //     game.physics.arcade.accelerationFromRotation(this.shipSprite.rotation, globalConstants.shipProperties.acceleration, this.shipSprite.body.acceleration);
  //   } else {
  //     this.shipSprite.body.acceleration.set(0);
  //   }

  //   if (this.key_fire.isDown) {
  //     this.fire();
  //   }
  // }

  // checkBoundaries(sprite) {
  //   if (sprite.x < 0) {
  //     sprite.x = game.width;
  //   } else if (sprite.x > game.width) {
  //     sprite.x = 0;
  //   }

  //   if (sprite.y < 0) {
  //     sprite.y = game.height;
  //   } else if (sprite.y > game.height) {

  //     sprite.y = 0;
  //   }
  // }

  // fire() {
  //   if (game.time.now > this.bulletInterval) {
  //     this.sndFire.play();

  //     var bullet = this.bulletGroup.getFirstExists(false);

  //     if (bullet) {
  //       var length = this.shipSprite.width * 0.5;
  //       var x = this.shipSprite.x + (Math.cos(this.shipSprite.rotation) * length);
  //       var y = this.shipSprite.y + (Math.sin(this.shipSprite.rotation) * length);

  //       bullet.reset(x, y);
  //       bullet.lifespan = globalConstants.bulletProperties.lifespan;
  //       bullet.rotation = this.shipSprite.rotation;

  //       game.physics.arcade.velocityFromRotation(this.shipSprite.rotation, globalConstants.bulletProperties.speed, bullet.body.velocity);
  //       this.bulletInterval = game.time.now + globalConstants.bulletProperties.interval;
  //     }
  //   }
  // }

  // createAsteroid(x, y, size, pieces = 1) {
  //   for (var i = 0; i < pieces; i++) {
  //     var asteroid = this.asteroidGroup.create(x, y, size);
  //     asteroid.anchor.set(0.5, 0.5);
  //     asteroid.body.angularVelocity = game.rnd.integerInRange(globalConstants.asteroidProperties[size].minAngularVelocity, globalConstants.asteroidProperties[size].maxAngularVelocity);

  //     var randomAngle = game.math.degToRad(game.rnd.angle());
  //     var randomVelocity = game.rnd.integerInRange(globalConstants.asteroidProperties[size].minVelocity, globalConstants.asteroidProperties[size].maxVelocity);

  //     game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, asteroid.body.velocity);
  //   }
  // }

  // resetAsteroids() {
  //   for (var i = 0; i < this.asteroidsCount; i++) {
  //     var side = Math.round(Math.random());
  //     var x;
  //     var y;

  //     if (side) {
  //       x = Math.round(Math.random()) * globalConstants.gameProperties.screenWidth;
  //       y = Math.random() * globalConstants.gameProperties.screenHeight;
  //     } else {
  //       x = Math.random() * globalConstants.gameProperties.screenWidth;
  //       y = Math.round(Math.random()) * globalConstants.gameProperties.screenHeight;
  //     }
  //     this.createAsteroid(x, y, globalConstants.graphicAssets.asteroidLarge.name);
  //   }
  // }

  // asteroidCollision(target, asteroid) {
  //   this.sndDestroyed.play();

  //   target.kill();
  //   asteroid.kill();

  //   if (target.key == globalConstants.graphicAssets.ship.name) {
  //     this.destroyShip();
  //   }

  //   this.splitAsteroid(asteroid);
  //   this.updateScore(globalConstants.asteroidProperties[asteroid.key].score);

  //   if (!this.asteroidGroup.countLiving()) {
  //     game.time.events.add(Phaser.Timer.SECOND * gameProperties.delayToStartLevel, this.nextLevel, this);
  //   }
  // }

  // destroyShip() {
  //   this.shipLives--;
  //   this.tf_lives.text = this.shipLives;

  //   if (this.shipLives) {
  //     game.time.events.add(Phaser.Timer.SECOND * globalConstants.shipProperties.timeToReset, this.resetShip, this);
  //   }
  // }

  // resetShip() {
  //   this.shipIsInvulnerable = true;
  //   this.shipSprite.reset(globalConstants.shipProperties.startX, globalConstants.shipProperties.startY);
  //   this.shipSprite.angle = 90;

  //   game.time.events.add(Phaser.Timer.SECOND * globalConstants.shipProperties.timeToReset, this.shipReady, this);
  //   game.time.events.repeat(Phaser.Timer.SECOND * globalConstants.shipProperties.blinkDelay, globalConstants.shipProperties.timeToReset / globalConstants.shipProperties.blinkDelay, this.shipBlink, this);
  // }

  // shipReady() {
  //   this.shipIsInvulnerable = false;
  //   this.shipSprite.visible = true;
  // }

  // shipBlink() {
  //   this.shipSprite.visible = !this.shipSprite.visible;
  // }

  // splitAsteroid(asteroid) {
  //   if (globalConstants.asteroidProperties[asteroid.key].nextSize) {
  //     this.createAsteroid(asteroid.x, asteroid.y, globalConstants.asteroidProperties[asteroid.key].nextSize, globalConstants.asteroidProperties[asteroid.key].pieces);
  //   }
  // }

  // updateScore(score) {
  //   this.score += score;
  //   this.tf_score.text = this.score;
  // }

  // nextLevel() {
  //   this.asteroidGroup.removeAll(true);

  //   if (this.asteroidsCount < globalConstants.asteroidProperties.maxAsteroids)  {
  //     this.asteroidsCount += globalConstants.asteroidsProperties.incrementAsteroids;
  //   }

  //   this.resetAsteroids();
  // }
}