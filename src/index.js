import _ from "lodash";
import "./style.css";
import Logo from "./logo.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], "");
  element.classList.add("hello");

  const myLogo = new Image();
  myLogo.src = Logo;

  element.appendChild(myLogo);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
