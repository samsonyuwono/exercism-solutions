function anagram(subject, list) {
  const lowerCaseSorted = subject
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  function matches(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
      let sortedListEl = list[i]
        .toLowerCase()
        .split("")
        .sort()
        .join("");

      if (sortedListEl === lowerCaseSorted) {
        result.push(list[i]);
      }
    }
    return result;
  }
  return { matches };
}
export default anagram;
//return array with matching word
//1. sort each word of matches
//2. if subject === match[i] push to result array
