import { MAX_CHALLENGES } from "../constants/settings";
import CompletedRow from "./CompletedRow";
import CurrentRow from "./CurrentRow";
import EmptyRow from "./EmptyRow";

const Grid = ({ guesses, currentGuess, isRevealing }) => {
  const blankRows =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : [];

  return (
    <div className="pb-6 board">
      {guesses.map((guess, index) => (
        <CompletedRow
          key={index}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === index}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className="" />
      )}
      {blankRows.map((blank, index) => (
        <EmptyRow key={index} />
      ))}
    </div>
  );
};

export default Grid;
