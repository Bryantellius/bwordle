import { useEffect } from "react";
import { DEFAULT_KEYBOARD_LAYOUT } from "../../constants/settings";
import { getStatuses } from "../../lib/statuses";
import Key from "./Key";

const Keyboard = ({ guesses, onEnter, onDelete, onChar }) => {
  let statuses = getStatuses(guesses);

  useEffect(() => {
    const eventHandler = (e) => {
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
    window.addEventListener("keyup", eventHandler);
    return () => {
      window.removeEventListener("keyup", eventHandler);
    };
  }, [onEnter, onDelete, onChar, guesses]);

  console.log(guesses);

  return (
    <div>
      {DEFAULT_KEYBOARD_LAYOUT.map((row, i) => {
        return (
          <div key={i} className="d-flex justify-content-center mb-1 revealed">
            {row.map((key, i) => {
              let onClick =
                key == "ENTER" ? onEnter : key == "DELETE" ? onDelete : onChar;
              return (
                <Key
                  key={key}
                  value={key}
                  status={statuses[key]}
                  onClick={() => onClick(key)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
