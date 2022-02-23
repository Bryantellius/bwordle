import "./App.css";
import { useState } from "react";

let solution = "apple";

function App() {
  let [answer, setAnswer] = useState(localStorage.getItem("answer"));
  let [attempt, setAttempt] = useState("");

  const updateAnswer = () => {
    setAnswer(attempt);
    localStorage.setItem("answer", attempt);
    setAttempt("");
  };

  const paintAnswer = (str) => {
    let jsx = [];

    for (let i = 0; i < str.length; i++) {
      let color;
      if (str[i] == solution[i]) {
        color = "letterIn";
      } else if (solution.includes(str[i])) {
        color = "letterNear";
      }
      jsx.push(
        <Letter key={i} color={color}>
          {str[i]}
        </Letter>
      );
    }

    return jsx;
  };

  const Letter = ({ color, children }) => {
    return <span className={`letter ` + color || ""}>{children}</span>;
  };

  return (
    <main className="app d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="text-center">BWORDLE</h1>
        <br />
        <div className="row">
          <div className="col-8 mx-auto text-center">
            <h2>{answer ? paintAnswer(answer) : "Welcome!"}</h2>
            <input
              type="text"
              name="answer"
              id="answer"
              onChange={(e) => setAttempt(e.target.value)}
              maxLength={5}
            />
            <button onClick={updateAnswer} disabled={attempt.length != 5}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
