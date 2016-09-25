import Phaser from 'phaser'
import * as globalConstants from '../globalConstants'

export default class extends Phaser.State {

  create() {
    this.tf_score = game.add.text(
      globalConstants.gameProperties.screenWidth / 2,
      globalConstants.gameProperties.screenWidth / 2,
      "GAME OVER",
      globalConstants.fontProperties.counterFontStyle
    );
  }

}