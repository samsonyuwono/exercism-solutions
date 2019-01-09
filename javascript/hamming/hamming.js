export function compute(a, b) {
  let counter = 0;
  if (a.length !== b.length) {
    throw "left and right strands must be of equal length";
  }
  for (let i = 0; i < a.length; i++) {
    if (a.length === 0 || a === b) {
      return 0;
    } else if (a.charAt(i) !== b.charAt(i)) {
      counter++;
    }
  }

  return counter;
}

//takes in two strings
//returns number of different characters from strings
