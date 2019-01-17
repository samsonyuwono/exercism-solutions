export function isPangram(sentence) {
  if (sentence.length === 0) return false;
  return (
    sentence
      .toLowerCase()
      .match(/[a-zA-Z]/gi)
      .filter((v, i, a) => a.indexOf(v) === i).length === 26
  );
}
