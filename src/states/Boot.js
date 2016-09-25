import Phaser from 'phaser'
import * as globalConstants from '../globalConstants'

export default class extends Phaser.State {

  preload() {
    this.stage.backgroundColor = '#111'

    this.game.load.image(globalConstants.graphicAssets.asteroidLarge.name, globalConstants.graphicAssets.asteroidLarge.URL);
    this.game.load.image(globalConstants.graphicAssets.asteroidMedium.name, globalConstants.graphicAssets.asteroidMedium.URL);
    this.game.load.image(globalConstants.graphicAssets.asteroidSmall.name, globalConstants.graphicAssets.asteroidSmall.URL);

    this.game.load.image(globalConstants.graphicAssets.bullet.name, globalConstants.graphicAssets.bullet.URL);
    this.game.load.image(globalConstants.graphicAssets.ship.name, globalConstants.graphicAssets.ship.URL);

    this.game.load.audio(globalConstants.soundAssets.destroyed.name, globalConstants.soundAssets.destroyed.URL);
    this.game.load.audio(globalConstants.soundAssets.fire.name, globalConstants.soundAssets.fire.URL);
  }

  create() {
    this.game.key_left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.game.key_right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.game.key_thrust = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.game.key_fire = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  render() {
    this.state.start('Play')
  }

}