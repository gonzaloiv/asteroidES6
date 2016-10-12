import 'pixi'
import 'p2'
import Phaser from 'phaser'

import * as states from './states'
import * as GLOBAL_CONSTANTS from './GlobalConstants.js'

class Game extends Phaser.Game {

  constructor() {
    super(GLOBAL_CONSTANTS.gameProperties.screenWidth, GLOBAL_CONSTANTS.gameProperties.screenHeight, Phaser.CANVAS, 'content', null)
    Object.keys(states).forEach(state => this.state.add(state, states[state]))
    this.state.start('Boot')
  }
}

window.game = new Game()