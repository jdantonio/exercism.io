var Bob = function() {};

Bob.prototype.hey = function(input) {
  var exclamation = /^(([^a-z]*[A-Z]+[^a-z]*[!?])|([A-Z\s]*[A-Z]+))$/g;
  var question = /^.*[a-z\d].*\?$/g;
  var silence = /^\s*$/g;

  if (exclamation.test(input)) {
    return 'Whoa, chill out!';
  } else if (question.test(input)) {
    return 'Sure.';
  } else if (silence.test(input)) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
