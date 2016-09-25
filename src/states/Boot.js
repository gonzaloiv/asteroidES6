import Phaser from 'phaser'
import * as globalConstants from '../globalConstants'

export default class extends Phaser.State {

  preload() {
    this.stage.backgroundColor = '#111'

    game.load.image(globalConstants.graphicAssets.asteroidLarge.name, globalConstants.graphicAssets.asteroidLarge.URL);
    game.load.image(globalConstants.graphicAssets.asteroidMedium.name, globalConstants.graphicAssets.asteroidMedium.URL);
    game.load.image(globalConstants.graphicAssets.asteroidSmall.name, globalConstants.graphicAssets.asteroidSmall.URL);

    game.load.image(globalConstants.graphicAssets.bullet.name, globalConstants.graphicAssets.bullet.URL);
    game.load.image(globalConstants.graphicAssets.ship.name, globalConstants.graphicAssets.ship.URL);

    game.load.audio(globalConstants.soundAssets.destroyed.name, globalConstants.soundAssets.destroyed.URL);
    game.load.audio(globalConstants.soundAssets.fire.name, globalConstants.soundAssets.fire.URL);
  }

  render() {
    this.state.start('Play')
  }

}