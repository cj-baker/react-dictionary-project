import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { InputGroup, Button, FormControl } from "react-bootstrap";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data);
  }

  function search() {
    let apiKey = "ef8b3fdo4bbe83bb3e23006at2b0a458";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <InputGroup className="input">
              <FormControl
                className="search"
                type="search"
                onChange={handleWordChange}
                autoFocus={true}
                placeholder="Type any word"
                defaultValue={props.defaultWord}
              />
              <Button className="submit" type="submit">
                Define
              </Button>
            </InputGroup>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
