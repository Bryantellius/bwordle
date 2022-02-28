const Key = ({ value, status, onClick }) => {
  return (
    <button
      id={`key${value}`}
      onClick={onClick}
      className={`key status-${status}`}
    >
      {value}
    </button>
  );
};

export default Key;
