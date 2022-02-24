import { REVEAL_TIME_MS, MAX_WORD_LENGTH } from "../constants/settings";

const colors = {
  absent: "dark",
  present: "warning",
  correct: "success",
  open: "dark"
};

const Key = ({ children, value, onClick, width = 40, isRevealing, status = "open" }) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH;

  const handleClick = (e) => {
    onClick(value);
    e.currentTarget.blur();
  };

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : "unset",
    width: `${width}px`,
    height: `58px`,
  };

  return (
    <button
      style={styles}
      className={`d-flex justify-content-center align-items-center rounded text-bold text-xs pointer btn-${colors[status]}`}
      onClick={handleClick}
    >
      {children || value}
    </button>
  );
};

export default Key;
