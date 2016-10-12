export const gameProperties = {
  screenWidth: 600,
  screenHeight: 600,
  delayToStartLevel: 3
}

export const shipProperties = {
  startX: gameProperties.screenWidth * 0.5,
  startY: gameProperties.screenHeight * 0.5,
  acceleration: 300,
  drag: 100,
  maxVelocity: 300,
  angularVelocity: 200,
  startingLives: 3,
  timeToReset: 1,
  blinkDelay: 0.2
}

export const bulletProperties = {
  speed: 400,
  interval: 100,
  lifespan: 2000,
  maxCount: 30
}

export const asteroidProperties = {
  startingAsteroids: 3,
  maxAsteroids: 20,
  incrementAsteroids: 2,

  asteroidLarge: { minVelocity: 50, maxVelocity: 150, minAngularVelocity: 0, maxAngularVelocity: 200, score: 20, nextSize: 'asteroidMedium', pieces: 2 },
  asteroidMedium: { minVelocity: 50, maxVelocity: 200, minAngularVelocity: 0, maxAngularVelocity: 200, score: 50, nextSize: 'asteroidSmall', pieces: 2 },
  asteroidSmall: { minVelocity: 50, maxVelocity: 300, minAngularVelocity: 0, maxAngularVelocity: 200, score: 100 }
}

export const fontProperties = {
  counterFontStyle: { font: '20px Arial', fill: '#FFFFFF', align: 'center' }
}