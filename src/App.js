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
      <footer>Coded by Casey Baker</footer>
    </div>
  );
}

export default App;
