import Cell from "./Cell";
import { getGuessStatuses } from "../lib/statuses";

const CompletedRow = ({ guess, isRevealing }) => {
  const statuses = getGuessStatuses(guess);

  return (
    <div className="d-flex justify-content-center mb-1">
      {guess.split("").map((letter, index) => {
        return (
          <Cell
            key={index}
            value={letter}
            isCompleted
            isRevealing={isRevealing}
            status={statuses[index]}
            position={index}
          />
        );
      })}
    </div>
  );
};

export default CompletedRow;
