/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  message = message.trim();

  if (isQuestion(message) && isShouting(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else if (isShouting(message)) {
    return "Whoa, chill out!";
  } else if (message === "") {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};

let isShouting = function(message) {
  return message.toUpperCase() === message && message.toLowerCase() !== message;
};

let isQuestion = function(message) {
  return message.endsWith("?");
};
