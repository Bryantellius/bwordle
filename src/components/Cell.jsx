import { REVEAL_TIME_MS } from "../constants/settings";

const Cell = ({ value, status, isRevealing, isCompleted, position }) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const animationDelay = `${position * REVEAL_TIME_MS}ms`;

  return (
    <div
      className={`bg-light ${isFilled ? "cell-fill-animation" : ""} ${
        shouldReveal ? "cell-reveal" : ""
      }`}
    >
      <div className="cell" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  );
};

export default Cell;
