import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container py-5">
      <div className="App mb-1">
        <Dictionary />
      </div>
      <p>
        <a
          href="https://github.com/solntseva93/dictionaryreactapp"
          target="_blank"
          rel="noreferrer"
        >
          Open sourse code
        </a>{" "}
        by Olena Solntseva
      </p>
    </div>
  );
}
