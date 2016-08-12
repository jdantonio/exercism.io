// use an associative array for fast lookup
var ROBOT_NAMES = {}

function leftPadNumber(string, length) {
  var str = string.toString();
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

function randomNumber(max) {
  return Math.floor((Math.random() * max) + 1);
}

function randomLetter() {
  // 65-90 == A-Z
  var ascii = randomNumber(26) + 64;
  return String.fromCharCode(ascii);
}

function randomName() {
  return randomLetter() + randomLetter() + leftPadNumber(randomNumber(999), 3);
}

function registerNewName(oldName) {
  var name = randomName();

  // the namespace is finite but we don't account for that
  while (name in ROBOT_NAMES) {
    name = randomName();
  }

  ROBOT_NAMES[name] = true;
  return name;
}

var Robot = function() {
  this.reset();
}

Robot.prototype.reset = function() {
  this.name = registerNewName(this.name);
}

module.exports = Robot;
