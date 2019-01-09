export function score(str) {
  let finalScore = 0;
  let word = str.toUpperCase();
  let scrabbleScr = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  };
  let letter;
  for (let i = 0; i < word.length; i++) {
    letter = word[i];

    finalScore += scrabbleScr[letter];
  }
  return finalScore;
}

//1. create scrabble score object with keys as score and letter of arrays as value
//2. match passed in string a uppercase or lowercase to value in Object
//3. correlate that value to it's key and add it to score variable
//4. return score variable
