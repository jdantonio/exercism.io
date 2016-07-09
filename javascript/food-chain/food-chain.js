/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

//*******************************************************************
// An object oriented implementation
//*******************************************************************

//*******************************************************************
// Superclass Verse

var Verse = function(animal, exclamation, parent) {
  this.animal = animal;
  this.exclamation = exclamation || '';
  this.parent = typeof parent === 'function' ? new parent() : parent;
}

Verse.prototype.firstLine = function() {
  return 'I know an old lady who swallowed a ' + this.animal + '.\n';
}

Verse.prototype.secondLine = function() {
  return this.exclamation ? this.exclamation + '\n' : '';
}

Verse.prototype.recursiveLine = function() {
  if (this.parent) {
    return 'She swallowed the ' + this.animal + ' to catch the ' + this.parent.animal + '.\n'
      + this.parent.recursiveLine();
  } else {
    return '';
  }
}

Verse.prototype.lastLine = function() {
  return 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
}

Verse.prototype.toString = function() {
  return this.firstLine() + this.secondLine() + this.recursiveLine() + this.lastLine();
}

//*******************************************************************
// Class FlyVerse

FlyVerse.prototype = new Verse();

function FlyVerse() {
  Verse.call(this, 'fly');
}

//*******************************************************************
// Class SpiderVerse

SpiderVerse.prototype = new Verse();

function SpiderVerse() {
  Verse.call(this, 'spider', 'It wriggled and jiggled and tickled inside her.', FlyVerse);
}

//*******************************************************************
// Class BirdVerse

BirdVerse.prototype = new Verse();

function BirdVerse() {
  Verse.call(this, 'bird', 'How absurd to swallow a bird!', SpiderVerse);
}

BirdVerse.prototype.recursiveLine = function() {
  return 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n'
    + this.parent.recursiveLine();
}

//*******************************************************************
// Class CatVerse

CatVerse.prototype = new Verse();

function CatVerse() {
  Verse.call(this, 'cat', 'Imagine that, to swallow a cat!', BirdVerse);
}

//*******************************************************************
// Class DogVerse

DogVerse.prototype = new Verse();

function DogVerse() {
  Verse.call(this, 'dog', 'What a hog, to swallow a dog!', CatVerse);
}

//*******************************************************************
// Class GoatVerse

GoatVerse.prototype = new Verse();

function GoatVerse() {
  Verse.call(this, 'goat', 'Just opened her throat and swallowed a goat!', DogVerse);
}

//*******************************************************************
// Class CowVerse

CowVerse.prototype = new Verse();

function CowVerse() {
  Verse.call(this, 'cow', 'I don\'t know how she swallowed a cow!', GoatVerse);
}

//*******************************************************************
// Class HorseVerse

HorseVerse.prototype = new Verse();

function HorseVerse() { }

HorseVerse.prototype.toString = function() {
  return 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
}

//*******************************************************************
// Class FoodChain

const VERSES = [
  FlyVerse,
  SpiderVerse,
  BirdVerse,
  CatVerse,
  DogVerse,
  GoatVerse,
  CowVerse,
  HorseVerse
]

function sequence(low, high) {
  return Array.apply(0, Array(high - low + 1)).map(function(x, y) {
    return low + y;
  });
}

module.exports = function FoodChain() {
  return {
    verse: function(num) {
      return (new VERSES[num-1]()).toString();
    },
    verses(first, last) {
      return sequence(first, last).reduce(function(song, num) {
        song.push(this.verse(num));
        return song;
      }.bind(this), []).join('\n') + '\n';
    }
  }
};
