import React from "react";
import ReactDOM from "react-dom";

const name = "Srushti";
const lname = "Kulakrni";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lname}!
    </h1>
    <p>My lucky number is {Math.floor(Math.random() * 30)}</p>
  </div>,
  document.getElementById("root")
);
