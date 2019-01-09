function transform(old) {
  let newStructure = {};
  let keys = Object.keys(old);
  for (var key in old) {
    old[key].forEach(val => {
      newStructure[val.toLowerCase()] = parseInt(key);
    });
  }
  return newStructure;
}

//takes in object key is number and value is array
// return object with key replaced by latter and value by number

module.exports = transform;
