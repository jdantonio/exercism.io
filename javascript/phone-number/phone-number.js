/*eslint no-const-assign: "error"*/
/*eslint-env es6*/

const INVALID = '0000000000';

var PhoneNumber = function(phoneNumber) {
  this.phoneNumber = validate(cleanse(phoneNumber));
};

function cleanse(phoneNumber) {
  var pn = String(phoneNumber).replace(/[\D]/g, '');
  return (pn.length === 11 && pn[0] === '1') ? pn.substring(1) : pn;
}

function validate(pn) {
  return pn.length !== 10 ? INVALID : pn;
}

PhoneNumber.prototype.number = function() {
  return this.phoneNumber;
};

PhoneNumber.prototype.areaCode = function() {
  return this.phoneNumber.substring(0, 3);
};

PhoneNumber.prototype.coCode = function() {
  return this.phoneNumber.substring(3, 6);
}

PhoneNumber.prototype.line = function() {
  return this.phoneNumber.substring(6);
}

PhoneNumber.prototype.toString = function() {
  return '(' + this.areaCode() + ') ' + this.coCode() + '-' + this.line();
};

module.exports = PhoneNumber;
