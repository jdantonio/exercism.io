var Bob = function() {};

Bob.prototype.hey = function(input) {

  var matchers = [
    [/^[^a-z]*[A-Z]+[^a-z]*[!?]$/, 'Whoa, chill out!'],
    [/^[A-Z\s]*[A-Z]+$/,           'Whoa, chill out!'],
    [/^.*[a-z\d].*\?$/,            'Sure.'],
    [/^\s*$/,                      'Fine. Be that way!'],
    [/^\s*[^\s].*$/,               'Whatever.']
  ]

  return matchers.find(function(matcher) {
    return matcher[0].test(input);
  })[1];
};

module.exports = Bob;
