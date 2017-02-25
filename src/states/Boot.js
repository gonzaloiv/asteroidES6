// Globals
import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../globalConstants'
import * as assets from '../Assets'

class Boot extends Phaser.State {

  preload() {
    this.game.load.image(assets.graphicAssets.asteroidLarge.name, assets.graphicAssets.asteroidLarge.URL)
    this.game.load.image(assets.graphicAssets.asteroidMedium.name, assets.graphicAssets.asteroidMedium.URL)
    this.game.load.image(assets.graphicAssets.asteroidSmall.name, assets.graphicAssets.asteroidSmall.URL)

    this.game.load.image(assets.graphicAssets.bullet.name, assets.graphicAssets.bullet.URL)
    this.game.load.image(assets.graphicAssets.ship.name, assets.graphicAssets.ship.URL)

    this.game.load.image(assets.graphicAssets.opening.name, assets.graphicAssets.opening.URL)

    this.game.load.audio(assets.soundAssets.destroyed.name, assets.soundAssets.destroyed.URL)
    this.game.load.audio(assets.soundAssets.fire.name, assets.soundAssets.fire.URL)
  }

  create() {
    // this.stage.backgroundColor = '#111'
    this.game.background = this.game.add.tileSprite(0, 0, GLOBAL_CONSTANTS.gameProperties.screenWidth, GLOBAL_CONSTANTS.gameProperties.screenHeight, 'background')
    this.state.start('Opening')
  }

}

export default Boot