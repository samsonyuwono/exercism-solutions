class RotationalCipher {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  rotate(string, rotation) {
    return string
      .split("")
      .map(x => {
        if (this.alphabet.includes(x)) {
          let i = (rotation + this.alphabet.indexOf(x)) % 26;
          //look at lower case letters
          return this.alphabet[i];
        } else if (this.alphabet.includes(x.toLowerCase())) {
          //look at capital letters
          let i = (rotation + this.alphabet.indexOf(x.toLowerCase())) % 26;
          return this.alphabet[i].toUpperCase();
        } else {
          //account for puncutation
          return x;
        }
      })
      .join("");
  }
}

module.exports = RotationalCipher;
