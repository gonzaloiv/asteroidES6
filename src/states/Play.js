import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

// Entities
import Ship from '../entities/Ship'

// Managers
import InputManager from '../managers/inputManager'
import CollisionManager from '../managers/collisionManager'

export default class extends Phaser.State {

  create() {
    this.stage.backgroundColor = '#111'
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.game.score = 0

    this.game.ship = new Ship(this.game, GLOBAL_CONSTANTS.shipProperties.startX, GLOBAL_CONSTANTS.shipProperties.startY)
    this.game.add.existing(this.game.ship)

    this.game.asteroidGroup = new AsteroidGroup(this.game)

    this.game.inputManager = new InputManager(this.game)
    this.game.collisionManager = new CollisionManager(this.game)
  }

  update() {
    this.game.inputManager.update()
    this.game.collisionManager.update()

    // ################################################
    // CAMERA NOT WORKING
    // ################################################
    // this.game.world.setBounds(
    //   this.game.ship.x - GLOBAL_CONSTANTS.gameProperties.screenWidth / 2,
    //   this.game.ship.y - GLOBAL_CONSTANTS.gameProperties.screenHeight / 2,
    //   this.game.ship.x + GLOBAL_CONSTANTS.gameProperties.screenWidth / 2,
    //   this.game.ship.y + GLOBAL_CONSTANTS.gameProperties.screenHeight / 2
    // )
    // this.game.camera.focusOnXY(this.game.ship.x, this.game.ship.y)
  }

  render() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32)
    this.game.debug.spriteCoords(this.game.ship, 32, 500)
  }

}