import "./style.css";
import createRouter from "./router";
import createElement from "./createElement";

const routes = ["/home", "/melon"];

function component() {
  const container = document.querySelector("#root") as HTMLDivElement;
  const header = document.createElement("header");
  document.body.insertAdjacentElement("afterbegin", header);

  routes.forEach((route) => {
    const button = createElement("button", {
      attributes: { "data-navigate": route },
      text: route,
      onClick: () => router.navigate(route),
    });

    header.appendChild(button);
  });

  const router = createRouter();

  const pages = {
    home: () => (container.innerText = "home page"),
    melon: () => (container.innerText = "melon page"),
  };

  router
    .addRoute("#/home", pages.home)
    .addRoute("#/melon", pages.melon)
    .start();
}
component();
