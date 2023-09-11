import books from "./books.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header d-flex justify-content-center align-items-center">
        <img src={books} alt="books" className="header-image img-fluid" />
        <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary defaultWord="search" />
      </main>
      <footer>
        Coded by{" "}
        <a
          href="www.linkedin.com/in/cj-baker93"
          target="_blank"
          rel="noreferrer"
        >
          Casey Baker
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/cj-baker/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open Sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
