var Pangram = function(sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  var letters = this.sentence.toLowerCase().replace(/[^a-z]/g, '').split('');
  var unused = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(function(letter) {
    return letters.indexOf(letter) === -1;
  });
  return unused.length === 0;
};

module.exports = Pangram;
