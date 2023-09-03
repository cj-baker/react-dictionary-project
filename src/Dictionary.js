import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Defining ${word}....`);
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
        <input type="submit" />
      </form>
    </div>
  );
}
