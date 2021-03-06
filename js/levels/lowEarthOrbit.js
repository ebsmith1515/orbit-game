
var LowEarthOrbitLevel = function() {

};

LowEarthOrbitLevel.prototype = Object.create(Level.prototype);

LowEarthOrbitLevel.prototype.start = function() {
  message("You are now in low earth orbit.");
  this.superStart();
  var earth = new Earth();
  this.rocket.x = earth.radius + 160000;
  this.rocket.y = 0;
  this.rocket.velocity.y = -7808;
  this.setupPlanetsMoons([earth], [new Moon("Moon", 385000000, 1737100, 7.3477 * Math.pow(10, 22), earth)], []);
}

LowEarthOrbitLevel.prototype.goalComplete = function() {

}
