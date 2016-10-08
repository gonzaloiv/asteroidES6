import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

export default class extends Phaser.State {

  create() {
    this.game.add.image(
      GLOBAL_CONSTANTS.gameProperties.screenWidth / 2.5,
      GLOBAL_CONSTANTS.gameProperties.screenHeight / 3.5,
      'opening',
      0.5
    )
    this.game.add.text(
      GLOBAL_CONSTANTS.gameProperties.screenWidth / 3.8,
      GLOBAL_CONSTANTS.gameProperties.screenHeight / 1.8,
      "PRESS SPACEBAR TO START",
      GLOBAL_CONSTANTS.fontProperties.counterFontStyle
    )
    this.key_start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  update() {
    if (this.key_start.isDown) {
      this.state.start('Play')
    }
  }

}