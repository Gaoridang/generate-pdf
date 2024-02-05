import createElement from "./createElement";

export function createLabel(title: string, name: string, children: HTMLElement[] | HTMLElement) {
  const span = createElement("span", {
    text: title,
  });

  const container = createElement("div", {
    children: [span],
  });

  const labelEl = createElement("label", {
    className: `${name}-label`,
    attributes: { for: name },
    children: Array.isArray(children) ? [container, ...children] : [container, children],
  });

  return labelEl;
}
