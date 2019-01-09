function Raindrops(drops) {}

Raindrops.prototype.convert = function(drops) {
  console.log(drops);
  let pling = drops % 3 ? "" : "Pling";
  let plang = drops % 5 ? "" : "Plang";
  let plong = drops % 7 ? "" : "Plong";

  return pling + plang + plong || drops.toString();
};

module.exports = Raindrops;

// 1. get factors of given number
// 2. push factors of given number to array
// 3. loop over and go through if statements for pling plang and plong
// 4. add pling plang and plong to empty string and return it
