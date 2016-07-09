function clean(word) {
  return word.trim().toLowerCase();
}

function sort(letters) {
  return clean(letters).split('').sort().join();
}

var Anagram = function(word) {
  this.word = clean(word);
  this.letters = sort(word);
}

Anagram.prototype.matches = function() {
  // convert arguments object to a real array
  var args = Array.prototype.slice.call(arguments);
  // flatten the array
  var words = [].concat.apply([], args);

  return words.reduce(function(memo, word) {
    if (sort(word) === this.letters && clean(word) !== this.word) {
      memo.push(word);
    }
    return memo;
  }.bind(this), []);
}

module.exports = Anagram;
