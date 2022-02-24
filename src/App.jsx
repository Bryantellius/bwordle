import "./App.css";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <main className="app d-flex justify-content-center align-items-start py-3">
      <div className="container">
        <h1 className="text-center my-3">BWORDLE</h1>
        <Keyboard
          onChar={(e) => alert(e)}
          onDelete={(e) => alert(e)}
          onEnter={(e) => alert(e)}
          guesses={[]}
          isRevealing={false}
        />
      </div>
    </main>
  );
}

export default App;
