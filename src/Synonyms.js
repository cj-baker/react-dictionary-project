import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        Synonsyms:
        {props.synonyms.map(function (synonyms, index) {
          return (
            <li key={index} className="synonyms">
              {synonyms}
            </li>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
