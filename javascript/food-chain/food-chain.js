/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const THIS_MARKER = '{SWALLOWED}';
const LAST_MARKER = '{CAUGHT}';

const FIRST_LINE = "I know an old lady who swallowed a " + THIS_MARKER + ".";
const INNER_LINE = "She swallowed the {SWALLOWED} to catch the {CAUGHT}.";
const LAST_LINE  = "I don't know why she swallowed the fly. Perhaps she'll die.\n";

const SPIDER = "It wriggled and jiggled and tickled inside her.";

const ANIMALS = [
  null, // no verse 0
  'fly',
  'spider',
]

var FoodChain = function() { }

FoodChain.prototype.verse = function(num) {
  var verses = [FIRST_LINE.replace(THIS_MARKER, ANIMALS[num])];
  if (num === 2) {
    verses.push(SPIDER);
  }

  for (var i = num; i > 1; i--) {
    console.log('here');
    verses.push(
      INNER_LINE.replace(THIS_MARKER, ANIMALS[i]).replace(LAST_MARKER, ANIMALS[i-1])
    );
  }

  verses.push(LAST_LINE)
  return verses.join('\n');
}

module.exports = FoodChain;
