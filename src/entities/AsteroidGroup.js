import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class AsteroidGroup extends Phaser.Group {

  constructor(game) {
    super(game)

    this.asteroidsCount = GLOBAL_CONSTANTS.asteroidProperties.startingAsteroids

    this.enableBody = true
    this.game.physics.enable(this, Phaser.Physics.ARCADE)

    this.soundDestroyed = game.add.audio('destroyed')
  }

  update() {}

  reset() {
    for (var i = 0; i < this.asteroidsCount; i++) {
      var side = Math.round(Math.random())
      var x
      var y

      if (side) {
        x = Math.round(Math.random()) * GLOBAL_CONSTANTS.gameProperties.screenWidth
        y = Math.random() * GLOBAL_CONSTANTS.gameProperties.screenHeight
      } else {
        x = Math.random() * GLOBAL_CONSTANTS.gameProperties.screenWidth
        y = Math.round(Math.random()) * GLOBAL_CONSTANTS.gameProperties.screenHeight
      }
      this.createAsteroid(x, y, 'asteroidLarge')
    }
  }

  createAsteroid(x, y, size, pieces = 1) {
    for (var i = 0; i < pieces; i++) {
      var asteroid = this.create(x, y, size);
      asteroid.anchor.set(0.5, 0.5);
      asteroid.body.angularVelocity = game.rnd.integerInRange(GLOBAL_CONSTANTS.asteroidProperties[size].minAngularVelocity, GLOBAL_CONSTANTS.asteroidProperties[size].maxAngularVelocity);

      var randomAngle = game.math.degToRad(game.rnd.angle());
      var randomVelocity = game.rnd.integerInRange(GLOBAL_CONSTANTS.asteroidProperties[size].minVelocity, GLOBAL_CONSTANTS.asteroidProperties[size].maxVelocity);

      this.game.physics.arcade.velocityFromRotation(randomAngle, randomVelocity, asteroid.body.velocity);
    }
  }

  splitAsteroid(asteroid) {
    this.soundDestroyed.play()
    if (GLOBAL_CONSTANTS.asteroidProperties[asteroid.key].nextSize) {
      this.createAsteroid(asteroid.x, asteroid.y, GLOBAL_CONSTANTS.asteroidProperties[asteroid.key].nextSize, GLOBAL_CONSTANTS.asteroidProperties[asteroid.key].pieces)
    }
  }

}

export default AsteroidGroup