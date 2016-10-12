import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

// Childs
import Asteroid from './Asteroid'

class AsteroidGroup extends Phaser.Group {

  constructor(game) {
    super(game)

    this.game = game
    this.enableBody = true
    this.asteroidsCount = GLOBAL_CONSTANTS.asteroidProperties.startingAsteroids
  }

  update() {}

  reset() {
    for (let i = 0; i < this.asteroidsCount; i++) {
      let side = Math.round(Math.random())
      let x
      let y

      if (side) {
        x = Math.round(Math.random()) * GLOBAL_CONSTANTS.gameProperties.screenWidth
        y = Math.random() * GLOBAL_CONSTANTS.gameProperties.screenHeight
      } else {
        x = Math.random() * GLOBAL_CONSTANTS.gameProperties.screenWidth
        y = Math.round(Math.random()) * GLOBAL_CONSTANTS.gameProperties.screenHeight
      }
      this.add(new Asteroid(this.game, x, y))
    }
  }

}

export default AsteroidGroup