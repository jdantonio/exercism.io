var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var letters = this.word.toLowerCase().replace(/[^a-z]/g, '').split('');

  var counts = letters.reduce(function(memo, letter) {
    memo[letter] = (memo[letter] === undefined) ? 1 : memo[letter] + 1;
    return memo;
  }, Object.create(null));

  return !Object.keys(counts).some(function(key) {
    return counts[key] > 1;
  })
};

module.exports = Isogram;
