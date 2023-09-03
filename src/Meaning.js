import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example">{props.meaning.example}</p>
    </div>
  );
}
