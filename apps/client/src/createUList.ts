import createElement from "./createElement";

export function createUList(name: string) {
  return createElement("ul", {
    className: `${name}-list`,
  });
}
