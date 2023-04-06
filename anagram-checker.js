module.exports = function (string1, string2) {
  return string1.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('') == string2.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');

  }
