import { getStatus } from "../../lib/statuses";

const Row = ({ letters, className = "" }) => {
  return (
    <div className={`${className} d-flex justify-content-center mb-1`}>
      {letters.map((letter, i) => {
        return (
          <div className={`letter status-${getStatus(letter, i)}`} key={i}>
            <span>{letter}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Row;
