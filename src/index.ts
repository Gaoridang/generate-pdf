import "./style.css";
import createRouter from "./router";

const routes = ["home", "melon"];

function component() {
  const container = document.querySelector("#root") as HTMLDivElement;
  const header = document.createElement("header");
  document.body.insertAdjacentElement("afterbegin", header);

  routes.forEach((route) => {
    const link = document.createElement("a");
    link.href = `#/${route}`;
    link.innerText = `${route}`;
    header.appendChild(link);
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
