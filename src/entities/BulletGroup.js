import Phaser from 'phaser'
import * as globalConstants from '../GlobalConstants'

class BulletGroup extends Phaser.Group {

  constructor(game) {
    super(game)

    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.createMultiple(globalConstants.bulletProperties.maxCount, 'bullet')
    this.setAll('anchor.x', 0.5)
    this.setAll('anchor.y', 0.5);
    this.setAll('lifespan', globalConstants.bulletProperties.lifespan);
  }

}

export default BulletGroup