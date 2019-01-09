export function steps(n) {
  let counter = 0;
  if (n < 1) {
    throw Error("Only positive numbers are allowed");
  }
  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    counter++;
  }
  return counter;
}

//return number of steps it takes to get to 1
