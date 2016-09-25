import Phaser from 'phaser'

class InputManager {

  constructor(game) {
    this.game = game
    console.log(this.game.ship)
  }

  update() {
    if (this.game.key_thrust.isDown) {
      this.game.ship.x++;
    }
  }

}

export default InputManager