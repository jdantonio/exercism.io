var DnaTranscriber = function() { };

const D2R = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

DnaTranscriber.prototype.toRna = function(dna) {
  var rna = '';
  for (var c of dna) {
    rna += D2R[c];
  }
  return rna;
};

module.exports = DnaTranscriber;