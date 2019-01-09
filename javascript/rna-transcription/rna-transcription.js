export const toRna = dna => {
  let pairs = { G: "C", C: "G", T: "A", A: "U" };
  const regExp = new RegExp("[^GCTA]");
  if (regExp.test(dna)) {
    throw new Error("Invalid input DNA.");
  } else {
    return dna
      .split("")
      .map(i => {
        return pairs[i];
      })
      .join("");
  }
};
