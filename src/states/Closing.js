import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

class Closing extends Phaser.State {

  create() {
    this.game.add.text(
      GLOBAL_CONSTANTS.gameProperties.screenWidth / 2.6,
      GLOBAL_CONSTANTS.gameProperties.screenHeight / 2,
      "GAME OVER",
      GLOBAL_CONSTANTS.fontProperties.counterFontStyle
    )
    this.key_restart = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  update() {
    if (this.key_restart.isDown) {
      this.state.start('Play')
    }
  }

}

export default Closing