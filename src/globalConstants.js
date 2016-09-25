export const gameProperties = {
  screenWidth: 640,
  screenHeight: 480,
  delayToStartLevel: 3
};

export const graphicAssets = {
  ship: { URL: 'assets/sprites/ship.png', name: 'ship' },
  bullet: { URL: 'assets/sprites/bullet.png', name: 'bullet' },

  asteroidLarge: { URL: 'assets/sprites/asteroidLarge.png', name: 'asteroidLarge' },
  asteroidMedium: { URL: 'assets/sprites/asteroidMedium.png', name: 'asteroidMedium' },
  asteroidSmall: { URL: 'assets/sprites/asteroidSmall.png', name: 'asteroidSmall' },
};

export const soundAssets = {
  fire: { URL: ['assets/sounds/fire.m4a', 'assets/fire.ogg'], name: 'fire' },
  destroyed: { URL: ['assets/sounds/destroyed.m4a', 'assets/destroyed.ogg'], name: 'destroyed' },
};

export const shipProperties = {
  startX: gameProperties.screenWidth * 0.5,
  startY: gameProperties.screenHeight * 0.5,
  acceleration: 300,
  drag: 100,
  maxVelocity: 300,
  angularVelocity: 200,
  startingLives: 3,
  timeToReset: 3,
  blinkDelay: 0.2
};

export const bulletProperties = {
  speed: 400,
  interval: 250,
  lifespan: 2000,
  maxCount: 30
};

export const asteroidProperties = {
  startingAsteroids: 4,
  maxAsteroids: 20,
  incrementAsteroids: 2,

  asteroidLarge: { minVelocity: 50, maxVelocity: 150, minAngularVelocity: 0, maxAngularVelocity: 200, score: 20, nextSize: graphicAssets.asteroidMedium.name, pieces: 2 },
  asteroidMedium: { minVelocity: 50, maxVelocity: 200, minAngularVelocity: 0, maxAngularVelocity: 200, score: 50, nextSize: graphicAssets.asteroidSmall.name, pieces: 2 },
  asteroidSmall: { minVelocity: 50, maxVelocity: 300, minAngularVelocity: 0, maxAngularVelocity: 200, score: 100 }
};

export const fontProperties = {
  counterFontStyle: { font: '20px Arial', fill: '#FFFFFF', align: 'center' }
};