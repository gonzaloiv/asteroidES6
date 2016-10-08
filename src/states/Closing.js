import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'

export default class extends Phaser.State {

  create() {
    this.game.add.text(
      GLOBAL_CONSTANTS.gameProperties.screenWidth / 2.6,
      GLOBAL_CONSTANTS.gameProperties.screenHeight / 2,
      "GAME OVER",
      GLOBAL_CONSTANTS.fontProperties.counterFontStyle
    )
  }

}