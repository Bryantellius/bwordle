import { MAX_WORD_LENGTH } from "../constants/settings";
import Cell from "./Cell";

const CurrentRow = ({ guess, className }) => {
  const currentGuess = guess.split("");
  console.log(currentGuess);
  const blanks = Array.from(Array(MAX_WORD_LENGTH - currentGuess.length));

  return (
    <div className={`${className} d-flex justify-content-center mb-1`}>
      {currentGuess.map((letter, index) => {
        return <Cell key={index} value={letter} />;
      })}
      {blanks.map((blank, index) => {
        return <Cell key={index} />;
      })}
    </div>
  );
};

export default CurrentRow;
