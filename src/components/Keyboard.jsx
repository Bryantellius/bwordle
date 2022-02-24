import Key from "./Key";
import { useEffect } from "react";
import { getStatuses } from "../lib/statuses";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

const Keyboard = ({ guesses, isRevealing, onChar, onDelete, onEnter }) => {
  const charStatuses = getStatuses(guesses);

  const onClick = (value) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  }, [onEnter, onDelete, onChar]);

  return (
    <div>
      {keys.map((row, index) => {
        return <div key={index} className="d-flex justify-content-center mb-1">
          {row.map((key) => {
            let props = {
              key,
              value: key,
              onClick,
              status: charStatuses[key],
              isRevealing,
            };

            if (key === "ENTER" || key === "DELETE") {
              props = { key, width: "fit-content", value: key, onClick, children: key };
            }

            return <Key {...props} />;
          })}
        </div>;
      })}
    </div>
  );
};

export default Keyboard;
