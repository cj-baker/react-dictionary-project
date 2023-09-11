import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="word d-inline">{props.results.word}</h1>
          <span className="phonetics">[{props.results.phonetic}]</span>
          <hr />
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meaning meaning={meaning} />
                <hr />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
