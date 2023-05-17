let bird = {
  canFly: true,
  hasBeak: true,
  canChirp: true,
};

// Inherits object bird properties and creates Prototype
let eagle = Object.create(bird);

console.log(eagle);
