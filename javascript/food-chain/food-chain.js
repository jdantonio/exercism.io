/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const THIS_MARKER = '{SWALLOWED}';
const LAST_MARKER = '{CAUGHT}';

const FIRST_LINE = "I know an old lady who swallowed a " + THIS_MARKER + ".";
const INNER_LINE = "She swallowed the {SWALLOWED} to catch the {CAUGHT}.";
const LAST_LINE  = "I don't know why she swallowed the fly. Perhaps she'll die.\n";

const ANIMALS = [
  null, // no verse 0
  ['fly'],
  ['spider', "It wriggled and jiggled and tickled inside her."],
  ['bird', "How absurd to swallow a bird!"],
  ['cat', "Imagine that, to swallow a cat!"],
  ['dog', "What a hog, to swallow a dog!"],
  ['goat', "Just opened her throat and swallowed a goat!"],
  ['cow', "I don't know how she swallowed a cow!"],
]

const SPIDER = " that wriggled and jiggled and tickled inside her.";

var FoodChain = function() { }

FoodChain.prototype.verse = function(num) {
  var verses = [FIRST_LINE.replace(THIS_MARKER, ANIMALS[num][0])];

  if (ANIMALS[num][1]) {
    verses.push(ANIMALS[num][1]);
  }

  for (var i = num; i > 1; i--) {
    var line = INNER_LINE.replace(THIS_MARKER, ANIMALS[i][0]).replace(LAST_MARKER, ANIMALS[i-1][0]);
    if (i === 3) {
      line = line.replace(/\.$/, SPIDER);
    }
    verses.push(line);
  }

  verses.push(LAST_LINE)
  return verses.join('\n');
}

module.exports = FoodChain;
