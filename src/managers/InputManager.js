import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class InputManager {

  constructor(game) {
    this.game = game

    this.key_left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.key_right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    this.key_thrust = this.game.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.key_fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  update() {
    if (this.key_left.isDown) {
      this.game.ship.body.angularVelocity = -GLOBAL_CONSTANTS.shipProperties.angularVelocity
    } else if (this.key_right.isDown) {
      this.game.ship.body.angularVelocity = GLOBAL_CONSTANTS.shipProperties.angularVelocity
    } else {
      this.game.ship.body.angularVelocity = 0
    }

    if (this.key_thrust.isDown) {
      game.physics.arcade.accelerationFromRotation(this.game.ship.rotation, GLOBAL_CONSTANTS.shipProperties.acceleration, this.game.ship.body.acceleration)
    } else {
      this.game.ship.body.acceleration.set(0)
    }

    if (this.key_fire.isDown && !this.game.ship.isInvulnerable) {
      this.game.ship.fire()
    }
  }

}

export default InputManager