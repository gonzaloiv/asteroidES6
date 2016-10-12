import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class WaveManager {

  constructor(game) {
    this.game = game
    this.game.asteroidGroup.reset()
  }

  checkLevel() {
    if (!this.game.asteroidGroup.countLiving()) {
      this.game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.gameProperties.delayToStartLevel, this._nextLevel, this)
    }
  }

  _nextLevel() {
    this.game.asteroidGroup.removeAll(true)
    if (this.game.asteroidGroup.asteroidsCount < GLOBAL_CONSTANTS.asteroidProperties.maxAsteroids)  {
      this.game.asteroidGroup.asteroidsCount += GLOBAL_CONSTANTS.asteroidProperties.incrementAsteroids
    }
    this.game.asteroidGroup.reset()
  }

}

export default WaveManager