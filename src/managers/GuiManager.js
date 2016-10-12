import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class GUIManager {

  constructor(game) {
    this.game = game

    this.lives = this.game.add.text(20, 10, GLOBAL_CONSTANTS.shipProperties.startingLives, GLOBAL_CONSTANTS.fontProperties.counterFontStyle)
    this.score = this.game.add.text(GLOBAL_CONSTANTS.gameProperties.screenWidth - 20, 10, "0", GLOBAL_CONSTANTS.fontProperties.counterFontStyle)
    this.score.align = 'right'
    this.score.anchor.set(1, 0)
  }

  update() {
    this.score.text = this.game.score
    this.lives.text = this.game.ship.lives
  }

}

export default GUIManager