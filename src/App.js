import books from "./books.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header d-flex justify-content-center align-items-center">
        <img src={books} alt="books" className="header-image img-fluid" />
        <h1>Dictionary App</h1>
      </header>
    </div>
  );
}

export default App;
