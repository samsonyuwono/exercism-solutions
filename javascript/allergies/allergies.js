//input is person's allergy score
//output array of items that person is allergiec to
//1. If number can be subtracted from the value in object
//2. Push key of object into array
//3. Return array
let allergyList = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};
function Allergies(score) {
  this.score = score;
}

Allergies.prototype.list = function(score) {
  let allergyArr = [];

  for (let name in allergyList) {
    if (allergyList[name] & this.score) {
      allergyArr.push(name);
    }
  }
  return allergyArr;
};

Allergies.prototype.allergicTo = function(value) {
  if (this.score & (allergyList[value] > 0)) {
    return true;
  } else {
    return false;
  }
};

module.exports = Allergies;
