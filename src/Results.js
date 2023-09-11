import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="word">{props.results.word}</h1>
        <small className="phonetics">{props.results.phonetic}</small>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
