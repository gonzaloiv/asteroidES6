import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

class Asteroid extends Phaser.Sprite {

  constructor(game, x, y, size = 'asteroidLarge', pieces = 1) {
    super(game, x, y, size)

    this.game = game
    this.size = size

    this.anchor.set(0.5, 0.5)
    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this.enableBody = true
    this.body.angularVelocity = this.game.rnd.integerInRange(GLOBAL_CONSTANTS.asteroidProperties[size].minAngularVelocity, GLOBAL_CONSTANTS.asteroidProperties[size].maxAngularVelocity)

    var randomAngle = this.game.math.degToRad(this.game.rnd.angle())
    var randomVelocity = this.game.rnd.integerInRange(GLOBAL_CONSTANTS.asteroidProperties[size].minVelocity, GLOBAL_CONSTANTS.asteroidProperties[size].maxVelocity)
    this.game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, this.body.velocity)

    this.soundDestroyed = this.game.add.audio('destroyed')
  }

  split() {
    this.soundDestroyed.play()
    this.kill()
    if (GLOBAL_CONSTANTS.asteroidProperties[this.size].nextSize) {
      for (let i = 0; i < GLOBAL_CONSTANTS.asteroidProperties[this.size].pieces; i++) {
        this.game.asteroidGroup.add(new Asteroid(this.game, this.x, this.y, GLOBAL_CONSTANTS.asteroidProperties[this.size].nextSize))
      }
    }
  }

  move(xAcceleration, yAcceleration) {
    this.game.physics.arcade.accelerationFromRotation(this, xAcceleration, yAcceleration)
  }

}

export default Asteroid