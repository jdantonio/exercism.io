var BeerSong = function() {};

const MANY = "{1} bottles of beer on the wall, {1} bottles of beer.\n\
Take one down and pass it around, {0} of beer on the wall.\n"

const ONE = "1 bottle of beer on the wall, 1 bottle of beer.\n\
Take it down and pass it around, no more bottles of beer on the wall.\n"

const NONE = "No more bottles of beer on the wall, no more bottles of beer.\n\
Go to the store and buy some more, 99 bottles of beer on the wall.\n"

BeerSong.prototype.verse = function(verse) {
  if (verse === 0) {
    return NONE;
  } else if (verse === 1) {
    return ONE;
  } else {
    var last = (verse === 2 ? '1 bottle' : String(verse - 1) + ' bottles');
    return MANY.replace(/\{1\}/g, verse).replace(/\{0\}/g, last);
  }
};

BeerSong.prototype.sing = function(start, stop) {
  stop = stop || 0;
  var song = '';
  for (var i = start; i >= stop; i--) {
    song += this.verse(i);
    if (i !== stop) {
      song += '\n';
    }
  }
  return song;
};

module.exports = BeerSong;
