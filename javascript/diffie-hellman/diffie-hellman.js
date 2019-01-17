class DiffieHellman {
  constructor(p, g) {
    if (!(1 <= p && p < 9999) || !(1 <= g && g < 9999)) {
      throw new Error("Arguments are out of ranges");
    }
    this.p = p;
    this.g = g;
  }
}
export default DiffieHellman;
