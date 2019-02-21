const chunked = function(digit, sliceSize) {
  const chunks = [];
  number = number.split("");
  for (let i = 0; i < number.length; i++) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === digits) {
      chunked.push([i]);
    } else {
      last.push(i);
    }
  }
  return chunks;
};

export function largestProduct(number, digits) {}

//input is string of numbers and number of how many numbers to be multipled
//return number is largest product based on number of input digits
//1. have an array to hold number of digits required from second input
//2. interate through string
//3. if product of array is larger than current make it the largest product
//4. return largest product
