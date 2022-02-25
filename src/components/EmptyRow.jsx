import { MAX_WORD_LENGTH } from "../constants/settings";
import Cell from "./Cell";

const EmptyRow = () => {
  const blanks = Array.from(Array(MAX_WORD_LENGTH));

  return (
    <div className="d-flex justify-content-center mb-1">
      {blanks.map((blank, index) => {
        return <Cell key={index} />;
      })}
    </div>
  );
};

export default EmptyRow;
