import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class CollisionManager {

  constructor(game) {
    this.game = game
  }

  update() {
    this.checkBoundaries(this.game.ship)
    this.game.ship.bulletGroup.forEachExists(this.checkBoundaries, this)
      // this.game.asteroidGroup.forEachExists(this.checkBoundaries, this)

    // game.physics.arcade.overlap(this.bulletGroup, this.asteroidGroup, this.asteroidCollision, null, this)
    // game.physics.arcade.overlap(this.shipSprite, this.asteroidGroup, this.asteroidCollision, null, this)
  }

  checkBoundaries(sprite) {
    if (sprite.x < 0) {
      sprite.x = this.game.width;
    } else if (sprite.x > this.game.width) {
      sprite.x = 0;
    }
    if (sprite.y < 0) {
      sprite.y = this.game.height;
    } else if (sprite.y > this.game.height) {
      sprite.y = 0;
    }
  }

  // asteroidCollision(target, asteroid) {

  //   target.kill();
  //   asteroid.kill();

  //   if (target.key == GLOBAL_CONSTANTS.graphicAssets.ship.name) {
  //     this.destroyShip();
  //   }

  //   this.splitAsteroid(asteroid);
  //   this.updateScore(GLOBAL_CONSTANTS.asteroidProperties[asteroid.key].score);

  //   if (!this.asteroidGroup.countLiving()) {
  //     game.time.events.add(Phaser.Timer.SECOND * gameProperties.delayToStartLevel, this.nextLevel, this);
  //   }
  // }

  // destroyShip() {
  //   this.shipLives--;

  //   if (this.shipLives) {
  //     game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.shipProperties.timeToReset, this.resetShip, this);
  //   }
  // }

  // updateScore(score) {
  //   this.score += score;
  // }

}

export default CollisionManager