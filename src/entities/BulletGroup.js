import Phaser from 'phaser'
import * as GLOBAL_CONSTANTS from '../GlobalConstants'

class BulletGroup extends Phaser.Group {

  constructor(game) {
    super(game)

    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.createMultiple(GLOBAL_CONSTANTS.bulletProperties.maxCount, 'bullet')
    this.setAll('anchor.x', 0.5)
    this.setAll('anchor.y', 0.5);
    this.setAll('lifespan', GLOBAL_CONSTANTS.bulletProperties.lifespan)
  }

}

export default BulletGroup