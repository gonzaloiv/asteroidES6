import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

class WaveManager {

  constructor(game) {
    this.game = game
    this.game.asteroidGroup.create()
  }

  nextLevel() {
    this.game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.gameProperties.delayToStartLevel, this._setNewLevel, this)
    this.game.levelFinished = false
  }

  _setNewLevel() {
    this.game.asteroidGroup.removeAll(true)
    if (this.game.asteroidGroup.asteroidsCount < GLOBAL_CONSTANTS.asteroidProperties.maxAsteroids)
      this.game.asteroidGroup.asteroidsCount += GLOBAL_CONSTANTS.asteroidProperties.incrementAsteroids
    this.game.asteroidGroup.create()
  }

}

export default WaveManager