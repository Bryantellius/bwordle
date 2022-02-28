import "./App.css";
import { useState, useEffect } from "react";
import {
  DICTIONARY_URL,
  GAME_TITLE,
  MAX_WORD_LENGTH,
  TEST_SOLUTION,
} from "./constants/settings";
import Keyboard from "./components/keys/Keyboard";
import Grid from "./components/display/Grid";

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [definition, setDefinition] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch solution definition
    fetch(DICTIONARY_URL + TEST_SOLUTION)
      .then((res) => res.json())
      .then((data) => {
        console.log(
          `Today's definition is: "${data[0].meanings[0].definitions[0].definition}`
        );
        setDefinition(data[0].meanings[0].definitions[0].definition);
        setIsLoaded(true);
      })
      .catch((err) => alert(err.message));
  }, []);

  const onChar = (letter) => {
    console.log(letter);
    if (currentGuess.length < MAX_WORD_LENGTH)
      setCurrentGuess(currentGuess + letter);
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
  };

  const onEnter = () => {
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  if (!isLoaded) {
    return (
      <main className="app d-flex justify-content-center align-items-center py-3">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    );
  } else
    return (
      <main className="app d-flex justify-content-center align-items-start py-3">
        <div className="container text-center">
          <h1 className="my-3">{GAME_TITLE}</h1>
          <p>{definition}</p>
          <Grid currentGuess={currentGuess} guesses={guesses} />
          <Keyboard onChar={onChar} onDelete={onDelete} onEnter={onEnter} guesses={guesses} />
        </div>
      </main>
    );
};

export default App;
