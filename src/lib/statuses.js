import { TEST_SOLUTION } from "../constants/settings";

export const getStatus = (letter, index) => {
  if (letter == TEST_SOLUTION.charAt(index)) {
    return "green";
  } else if (TEST_SOLUTION.includes(letter)) {
    return "yellow";
  } else {
    return "gray";
  }
};

export const getStatuses = (guesses) => {
  let statuses = {};

  guesses.forEach((word) => {
    word.split("").forEach((letter, i) => {
      if (letter == TEST_SOLUTION.charAt(i)) {
        statuses[letter] = "green";
      } else if (
        statuses[letter] != "green" &&
        TEST_SOLUTION.includes(letter)
      ) {
        statuses[letter] = "yellow";
      } else {
        statuses[letter] = "gray";
      }
    });
  });

  console.log(statuses);

  return statuses;
};
