import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

import BulletGroup from './BulletGroup'

class Ship extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'ship')

    this.anchor.setTo(0.5)
    this.angle = -90

    this.game.physics.enable(this, Phaser.Physics.ARCADE)
    this.body.drag.set(GLOBAL_CONSTANTS.shipProperties.drag)
    this.body.maxVelocity.set(GLOBAL_CONSTANTS.shipProperties.maxVelocity)

    this.bulletGroup = new BulletGroup(this.game)
    this.bulletInterval = 0

    this.lives = GLOBAL_CONSTANTS.shipProperties.startingLives
    this.isInvulnerable = false

    this.soundFire = game.add.audio('fire')
  }

  fire() {
    if (this.game.time.now > this.bulletInterval) {
      this.soundFire.play()

      var bullet = this.bulletGroup.getFirstExists(false)

      if (bullet) {
        var length = this.width * 0.5
        var x = this.x + (Math.cos(this.rotation) * length)
        var y = this.y + (Math.sin(this.rotation) * length)

        bullet.reset(x, y)
        bullet.lifespan = GLOBAL_CONSTANTS.bulletProperties.lifespan
        bullet.rotation = this.rotation

        this.game.physics.arcade.velocityFromRotation(this.rotation, GLOBAL_CONSTANTS.bulletProperties.speed, bullet.body.velocity)
        this.bulletInterval = game.time.now + GLOBAL_CONSTANTS.bulletProperties.interval
      }
    }
  }

  destroy() {
    this.lives--
      if (this.lives > 0) {
        this.game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.shipProperties.timeToReset, this.resetShip, this)
      } else {
        this.game.state.start('Closing')
      }
  }

  // ################################################
  // PRIVATE METHODS
  // ################################################
  resetShip() {
    this.isInvulnerable = true
    this.reset(GLOBAL_CONSTANTS.shipProperties.startX, GLOBAL_CONSTANTS.shipProperties.startY)

    this.game.time.events.add(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.shipProperties.timeToReset, this.getReady, this)
    this.game.time.events.repeat(Phaser.Timer.SECOND * GLOBAL_CONSTANTS.shipProperties.blinkDelay, GLOBAL_CONSTANTS.shipProperties.timeToReset / GLOBAL_CONSTANTS.shipProperties.blinkDelay, this.blink, this)
  }

  blink() {
    this.visible = !this.visible
  }

  getReady() {
    this.isInvulnerable = false;
    this.visible = true;
  }

}

export default Ship