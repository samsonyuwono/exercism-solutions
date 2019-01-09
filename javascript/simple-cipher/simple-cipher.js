var alphabet = "abcdefghijklmnopqrstuvwxyz";
var Cipher = function(key) {
  if (!/^[a-z]+$/.test(key)) {
    throw Error("Bad key");
  }
  this.key = key === undefined ? randomKey() : key;
};

Cipher.prototype.encode = function(chars) {
  let charsArr = chars.split("");
  return charsArr.map((char, index) => encoded(char, index, this.key)).join("");
};

Cipher.prototype.decode = function(chars) {
  let charsArr = chars.split("");
  return charsArr.map((char, index) => decoded(char, index, this.key)).join("");
};

function encoded(char, index, key) {
  return alphabet[
    (alphabet.indexOf(char) + alphabet.indexOf(key[index % key.length])) %
      alphabet.length
  ];
}

function decoded(char, index, key) {
  return alphabet[
    (alphabet.indexOf(char) -
      alphabet.indexOf(key[index % key.length]) +
      alphabet.length) %
      alphabet.length
  ];
}

function randomKey() {
  return Array(100)
    .fill()
    .map(e => alphabet[Math.floor(Math.random() * Math.floor(25))])
    .join("");
}

module.exports = Cipher;
