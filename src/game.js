import 'pixi'
import 'p2'
import Phaser from 'phaser'

import * as states from './states'
import * as globalConstants from './globalConstants.js'

class Game extends Phaser.Game {

  constructor() {
    super(globalConstants.screenWidth, globalConstants.screenHeight, Phaser.AUTO, 'content', null)
    Object.keys(states).forEach(state => this.state.add(state, states[state]));
    this.state.start('Boot')
  }
}

window.game = new Game()