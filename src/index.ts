import { join } from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello", "webpack"], "");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
