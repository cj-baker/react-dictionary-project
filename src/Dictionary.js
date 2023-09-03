import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Defining ${word}....`);
    let apiKey = "ef8b3fdo4bbe83bb3e23006at2b0a458";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleWordChange}
          autoFocus={true}
          placeholder="Type any word"
        />
        <input type="submit" value="Define" />
      </form>
      <Results results={results} />
    </div>
  );
}
