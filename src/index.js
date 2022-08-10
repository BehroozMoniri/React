import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// var React = require("react");
// var ReactDOM = require("react-dom");
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
customStyle.color = "blue";
const name = "Behrooz";
const lname = "Moniri";
const number = Math.floor(Math.random() * 1000);
const Year = new Date().getFullYear();
const currentTime = new Date().getHours();
const hour = new Date().getHours();
const Minutes = new Date().getMinutes();
const date = new Date().getDate();
const img = "https://picsum.photos/seed/picsum/200/300";
ReactDOM.render(
  <div>
    <h1 style={customStyle}>I am typing this index.js fille!</h1>
    <p>
      This is a new line, hello {name + " " + lname}, my lucky number is{" "}
      {number}. We are living in {date + " " + Year}, {hour + ":" + Minutes}
    </p>
    <img src={img + "?greyscale"} alt="" />
  </div>,
  document.getElementById("root")
);
const customStyler = {
  color: ""
};
var greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyler.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyler.color = "green";
} else {
  greeting = "Good night";
  customStyler.color = "blue";
}

ReactDOM.render(
  <div>
    <p className="heading" style={customStyler}>
      {greeting}
    </p>
  </div>,
  document.getElementById("gib")
);
