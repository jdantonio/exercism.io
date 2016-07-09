/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

var BeerSong = function() {};

const MANY = "{1} bottles of beer on the wall, {1} bottles of beer.\n\
Take one down and pass it around, {0} bottles of beer on the wall.\n"

const TWO = "2 bottles of beer on the wall, 2 bottles of beer.\n\
Take one down and pass it around, 1 bottle of beer on the wall.\n"

const ONE = "1 bottle of beer on the wall, 1 bottle of beer.\n\
Take it down and pass it around, no more bottles of beer on the wall.\n"

const NONE = "No more bottles of beer on the wall, no more bottles of beer.\n\
Go to the store and buy some more, 99 bottles of beer on the wall.\n"

const LYRICS = [NONE, ONE, TWO, MANY];

function downSequence(high, low) {
  return Array.apply(0, Array(high - low + 1)).map(function(x, y) {
    return high - y;
  });
}

BeerSong.prototype.verse = function(verse) {
  var lyric = LYRICS[verse] || MANY; 
  return lyric.replace(/\{1\}/g, verse).replace(/\{0\}/g, verse - 1);
};

BeerSong.prototype.sing = function(high, low) {
  low = low || 0;
  return downSequence(high, low).reduce(function(song, verse) {
    song.push(this.verse(verse));
    return song;
  }.bind(this), []).join('\n');
};

module.exports = BeerSong;
