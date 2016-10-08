import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class GuiManager {

  constructor(game) {
    this.game = game

    this.tf_lives = this.game.add.text(20, 10, GLOBAL_CONSTANTS.shipProperties.startingLives, GLOBAL_CONSTANTS.fontProperties.counterFontStyle)
    this.tf_score = this.game.add.text(GLOBAL_CONSTANTS.gameProperties.screenWidth - 20, 10, "0", GLOBAL_CONSTANTS.fontProperties.counterFontStyle)
    this.tf_score.align = 'right'
    this.tf_score.anchor.set(1, 0)
  }

  update() {
    this.tf_score.text = this.game.score
    this.tf_lives.text = this.game.ship.lives
  }

}

export default GuiManager