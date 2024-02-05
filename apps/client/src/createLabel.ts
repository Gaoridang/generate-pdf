import createElement from "./createElement";

export function createLabel(title: string, name: string, children: HTMLElement[] | HTMLElement) {
  const labelEl = createElement("label", {
    className: `${name}-label`,
    attributes: { for: name },
    text: title,
    children: Array.isArray(children) ? [...children] : [children],
  });

  return labelEl;
}
