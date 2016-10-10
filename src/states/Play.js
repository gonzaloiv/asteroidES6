// Globals
import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

// Entities
import Ship from '../entities/Ship'
import AsteroidGroup from '../entities/AsteroidGroup'

// Managers
import CollisionManager from '../managers/CollisionManager'
import GuiManager from '../managers/GuiManager'
import InputManager from '../managers/InputManager'
import WaveManager from '../managers/WaveManager'

class Play extends Phaser.State {

  create() {
    this.stage.backgroundColor = '#111'
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.score = 0

    // this.game.background = this.game.add.tileSprite(0, 0, GLOBAL_CONSTANTS.gameProperties.screenWidth, GLOBAL_CONSTANTS.gameProperties.screenHeight, 'background')

    this.game.ship = new Ship(this.game, GLOBAL_CONSTANTS.shipProperties.startX, GLOBAL_CONSTANTS.shipProperties.startY)
    this.game.add.existing(this.game.ship)

    this.game.asteroidGroup = new AsteroidGroup(this.game)

    this.game.collisionManager = new CollisionManager(this.game)
    this.game.guiManager = new GuiManager(this.game)
    this.game.inputManager = new InputManager(this.game)
    this.game.waveManager = new WaveManager(this.game)
  }

  update() {
    this.game.collisionManager.update()
    this.game.guiManager.update()
    this.game.inputManager.update()
    this.game.waveManager.update()
  }

  render() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32)
    // this.game.debug.spriteCoords(this.game.ship, 32, 500)
  }

}

export default Play