// import { correctAnswer } from "./words";
let correctAnswer = "test";

export const getStatuses = (guesses) => {
  const charObj = {};

  guesses.forEach((word) => {
    word.split("").forEach((letter, i) => {
      if (!correctAnswer.includes(letter)) {
        // letter not in the solution
        return (charObj[letter] = "absent");
      }

      if (letter === correctAnswer[i]) {
        // letter is in the solution at the correct spot
        return (charObj[letter] = "correct");
      }

      if (charObj[letter] !== "correct") {
        // letter is in the solution
        return (charObj[letter] = "present");
      }
    });
  });

  return charObj;
};

export const getGuessStatuses = (guess) => {
  return guess.split("").map((letter, index) => {
    if (!correctAnswer.includes(letter)) {
      // letter not in the solution
      return "absent";
    } else if (letter === correctAnswer[index]) {
      // letter is in the solution at the correct spot
      return "correct";
    } else {
      // letter is in the solution
      return "present";
    }
  });
};
