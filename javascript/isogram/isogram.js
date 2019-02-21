//1. initialzie empty object for character map
//2. loop through string
//3. if character isn't in object then add to it else add to existing char count
//4. loop through object and if there's more than one of a character then return false else return true

export function isIsogram(str) {
  const charMap = {};
  if (str.length === 0) return true;
  for (let i of str.toLowerCase()) {
    if (charMap[i]) {
      charMap[i]++;
    } else {
      charMap[i] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > 1) {
      console.log(charMap[char]);
      return false;
    } else {
      return true;
    }
  }
}
