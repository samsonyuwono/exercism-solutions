export function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  let result =
    sentence.length === 0
      ? false
      : (result = sentence
          .match(/[a-zA-Z]/gi)
          .sort()
          .filter((v, i, a) => a.indexOf(v) === i));
  return result.length === 26;
}

//1. use regex to find all letters of alphabet
//2. filter only unique values from result
//3. if result is 26 return true or else return false
