import React from "react";
import ReactDOM from "react-dom";

const name = "Srushti";
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p> CopyRight {" " + new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
