import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class WaveManager {

  constructor(game) {
    this.game = game
    this.game.asteroidGroup.reset()
  }

  nextLevel() {
    this.game.asteroidGroup.removeAll(true)
    if (this.game.asteroidsCount < GLOBAL_CONSTANTS.asteroidProperties.maxAsteroids)  {
      this.asteroidGroup.asteroidsCount += GLOBAL_CONSTANTS.asteroidsProperties.incrementAsteroids
    }
    this.game.asteroidGroup.reset()
  }

}

export default WaveManager