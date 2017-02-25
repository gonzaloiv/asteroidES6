import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

class CollisionManager {

  constructor(game) {
    this.game = game
  }

  update() {
    this._checkBoundaries(this.game.ship)
    this.game.ship.bulletGroup.forEachExists(this._checkNoBoundaries, this)
    this.game.asteroidGroup.forEachExists(this._checkBoundaries, this)

    this.game.physics.arcade.overlap(this.game.ship.bulletGroup, this.game.asteroidGroup, this._asteroidCollision, null, this)

    if (!this.game.ship.isInvulnerable)
      this.game.physics.arcade.overlap(this.game.ship, this.game.asteroidGroup, this._asteroidCollision, null, this)
  }

  _checkBoundaries(sprite) {
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

  _checkNoBoundaries(sprite) {
    if (sprite.x < -this.game.width || sprite.x > this.game.width * 2 || sprite.y < -this.game.height || sprite.y > this.game.height * 2) {
      sprite.kill()
    }
  }

  _asteroidCollision(target, asteroid) {
    target.kill()
    asteroid.split()

    if (target == this.game.ship)
      this.game.ship.lives > 1 ? this.game.ship.destroy() : this.game.gameOver = true

    if (!this.game.asteroidGroup.countLiving())
      this.game.levelFinished = true

    this.game.score += GLOBAL_CONSTANTS.asteroidProperties[asteroid.size].score
  }

}

export default CollisionManager