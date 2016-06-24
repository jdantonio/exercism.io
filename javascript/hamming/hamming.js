var Hamming = function() {};

Hamming.prototype.compute = function(first, second) {
  if (first.length !== second.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var diff = 0;

  for (var i = 0; i < first.length; i++) {
    if (first.charAt(i) !== second.charAt(i)) {
      diff += 1;
    }
  }

  return diff;
};

module.exports = Hamming;
