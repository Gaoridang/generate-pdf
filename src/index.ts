import "./style.css";
import createRouter from "./router";
import createElement from "./createElement";
import { createForm } from "./createForm";

const routes = ["/home", "/form"];

const container = document.querySelector("#root") as HTMLDivElement;
const header = document.createElement("header");
document.body.insertAdjacentElement("afterbegin", header);

const form = createForm();
const router = createRouter();

const pages = {
  home: () => (container.innerText = "home page"),
  form: () => {
    container.innerText = "";
    container.appendChild(form);
  },
};

routes.forEach((route) => {
  const button = createElement("button", {
    attributes: { "data-navigate": route },
    text: route.replace("/", ""),
    onClick: () => router.navigate(route),
  });

  header.appendChild(button);
});

router.addRoute("#/home", pages.home).addRoute("#/form", pages.form).start();
