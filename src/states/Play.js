// Globals
import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

// Entities
import Ship from '../entities/Ship'
import AsteroidGroup from '../entities/AsteroidGroup'

// Managers
import CollisionManager from '../managers/CollisionManager'
import GUIManager from '../managers/GuiManager'
import InputManager from '../managers/InputManager'
import WaveManager from '../managers/WaveManager'

class Play extends Phaser.State {

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.score = 0
    this.game.levelFinished = false
    this.game.gameOver = false

    this.game.ship = new Ship(this.game, GLOBAL_CONSTANTS.shipProperties.startX, GLOBAL_CONSTANTS.shipProperties.startY)
    this.game.asteroidGroup = new AsteroidGroup(this.game)

    this.collisionManager = new CollisionManager(this.game)
    this.guiManager = new GUIManager(this.game)
    this.inputManager = new InputManager(this.game)
    this.waveManager = new WaveManager(this.game)
  }

  update() {
    this.collisionManager.update()
    this.guiManager.update()
    this.inputManager.update()

    if (this.game.levelFinished)
      this.waveManager.nextLevel()

    if (this.game.gameOver)
      this.game.state.start('Closing')
  }

  render() {
    // this.game.debug.cameraInfo(this.game.camera, 32, 32)
    this.game.debug.spriteCoords(this.game.ship, 32, 500)
  }

}

export default Play