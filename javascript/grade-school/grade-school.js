var School = function() {
  this.database = { };
}

School.prototype.roster = function() {
  return JSON.parse(JSON.stringify(this.database));
}

School.prototype.grade = function(grade) {
  return JSON.parse(JSON.stringify(this.database[grade] || { }));
}

School.prototype.add = function(name, grade) {
  if (this.database[grade]) {
    this.database[grade].push(name);
    this.database[grade].sort();
  } else {
    this.database[grade] = [name];
  }
}
module.exports = School;