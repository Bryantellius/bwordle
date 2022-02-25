import "./App.css";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { useState, useEffect } from "react";
import { MAX_WORD_LENGTH } from "./constants/settings";

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const onChar = (letter) => {
    console.log(letter)
    if (currentGuess.length < MAX_WORD_LENGTH)
      setCurrentGuess(currentGuess + letter);
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1))
  };

  const onEnter = () => {
    setGuesses([...guesses, currentGuess]);
  };

  return (
    <main className="app d-flex justify-content-center align-items-start py-3">
      <div className="container">
        <h1 className="text-center my-3">BWORDLE</h1>
        <Grid guesses={[]} currentGuess={currentGuess} isRevealing={false} />
        <Keyboard
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          guesses={[]}
          isRevealing={false}
        />
      </div>
    </main>
  );
};

export default App;
