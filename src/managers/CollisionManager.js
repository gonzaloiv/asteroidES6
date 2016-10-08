import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class CollisionManager {

  constructor(game) {
    this.game = game
  }

  update() {
    this.checkBoundaries(this.game.ship)
    this.game.ship.bulletGroup.forEachExists(this.checkBoundaries, this)
    this.game.asteroidGroup.forEachExists(this.checkBoundaries, this)

    this.game.physics.arcade.overlap(this.game.ship.bulletGroup, this.game.asteroidGroup, this.asteroidCollision, null, this)
    this.game.physics.arcade.overlap(this.game.ship, this.game.asteroidGroup, this.asteroidCollision, null, this)

    if (!this.shipIsInvulnerable) {
      this.game.physics.arcade.overlap(this.game.ship, this.game.asteroidGroup, this.asteroidCollision, null, this)
    }
  }

  checkBoundaries(sprite) {
    if (sprite.x < 0) {
      sprite.x = this.game.width
    } else if (sprite.x > this.game.width) {
      sprite.x = 0
    }
    if (sprite.y < 0) {
      sprite.y = this.game.height
    } else if (sprite.y > this.game.height) {
      sprite.y = 0
    }
  }

  asteroidCollision(target, asteroid) {
    target.kill()
    asteroid.kill()

    if (target == this.game.ship) {
      this.game.ship.destroy()
    }

    this.game.asteroidGroup.splitAsteroid(asteroid)
    this.updateScore(GLOBAL_CONSTANTS.asteroidProperties[asteroid.key].score)

    if (!this.game.asteroidGroup.countLiving()) {
      this.game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.gameProperties.delayToStartLevel, this.game.waveManager.nextLevel(), this)
    }
  }

  // ################################################
  // PRIVATE METHODS
  // ################################################
  updateScore(score) {
    this.game.score += score;
  }

}

export default CollisionManager