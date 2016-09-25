import Phaser from 'phaser'
import * as globalConstants from '../globalConstants'

class Ship extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'ship')

    this.game = game
    this.anchor.setTo(0.5)

    this.game.add.existing(this)
  }

  resetShip() {
    this.game.time.events.repeat(Phaser.Timer.SECOND * globalConstants.shipProperties.blinkDelay, 30000, this.blink, this);
  }

  fire() {

  }

  // private
  blink() {
    this.visible = !this.visible;
  }

}

export default Ship