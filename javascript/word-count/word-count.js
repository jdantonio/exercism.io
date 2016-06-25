var Words = function() {};

Words.prototype.count = function(input) {
  return input.trim().toLowerCase().split(/\s+/).reduce(function(memo, word) {
    memo[word] = (memo[word] === undefined) ? 1 : memo[word] + 1;
    return memo;
  }, Object.create(null));
};

module.exports = Words;
