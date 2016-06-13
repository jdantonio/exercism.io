GIGAMILLI = Math.pow(10, 9) * 1000;

var Gigasecond = function(from) {
    this.from = from.getTime();
};

Gigasecond.prototype.date = function() {
    return new Date(GIGAMILLI + this.from);
};

module.exports = Gigasecond;