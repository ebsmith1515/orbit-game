var gameState;
var Level = function() {
  this.planets = [];
  this.bodies = []; //all moons and planets
  this.moons = [];
  this.rocket = Rocket(6371390 + 160000, 0);
  this.input = {spacebar: false, left: false, right: false};
  this.inputMuted = false;
  this.timeScale = 1;
  this.zoomMode = 1; //0 for normal, 1 on ship
};

Level.prototype.setupPlanetsMoons = function(planets, moons) {
  this.planets = planets;
  this.moons = moons;
  this.bodies = this.planets.concat(this.moons);
  // addLaunchpad(this.planets[0], 0);
}

var LowEarthOrbitLevel = function() {
  Level.call(this);
  this.setupPlanetsMoons([new Planet("Earth", 0, 0, 6371390, 5.97 * Math.pow(10, 24))],
              [new Moon("Moon", 385000000, 1737100, 7.3477 * Math.pow(10, 22), this.planets[0])]);
  this.rocket.velocity.y = 7808;
  message("You are now in low earth orbit.");
};
LowEarthOrbitLevel.prototype = Object.create(Level.prototype);

var IntroLevel = function() {
  Level.call(this);
  this.setupPlanetsMoons([new Planet("Minimus", 0, 0, 1000, 1 * Math.pow(10, 17))], []);
  this.rocket.x = 1010;
  this.rocket.y = 0;
};
IntroLevel.prototype = Object.create(Level.prototype);