import { MAX_CHALLENGES, MAX_WORD_LENGTH } from "../../constants/settings";
import Row from "./Row";

const Grid = ({ currentGuess, guesses }) => {
  return (
    <div className="grid">
      {/* Previous Guesses */}
      {guesses.map((guess, i) => {
        return <Row letters={guess.split("")} key={i} className="revealed" />;
      })}
      {/* Current Row */}
      <Row letters={currentGuess.padEnd(MAX_WORD_LENGTH, " ").split("")} />
      {/* Remaining Rows */}
      {Array.from({ length: MAX_CHALLENGES - 1 - guesses.length }).map(
        (row, i) => {
          return <Row letters={[" ", " ", " ", " ", " "]} key={i} />;
        }
      )}
    </div>
  );
};

export default Grid;
