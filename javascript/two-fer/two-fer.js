export const twoFer = name => {
  if (name !== "X") {
    return "One for " + name + ", " + "one for me.";
  } else if (name === "X") {
    return "One for you, one for me.";
  }
};
