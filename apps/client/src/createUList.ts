import createElement from "./createElement";

export function createUList(name: string, children: HTMLElement[]) {
  return createElement("ul", {
    className: `${name}-list`,
    children: children,
  });
}

export function createListItem(name: string, children: HTMLElement[]) {
  return createElement("li", {
    className: `${name}`,
    children: children,
  });
}
