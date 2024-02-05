import createElement from "./createElement";
import { addElement } from "./createSection";

export function createLabel(
  title: string,
  name: string,
  children: HTMLElement[] | HTMLElement,
  tagName: keyof HTMLElementTagNameMap,
  hasAddButton: boolean = false
) {
  const span = createElement("span", {
    text: title,
  });

  const addButton = createElement("button", {
    text: "추가하기",
    className: `button add-${name}-button`,
    onClick: (e) => {
      e.preventDefault();
      addElement(labelEl, tagName, name);
    },
  });

  const container = createElement("div", {
    children: hasAddButton ? [span, addButton] : [span],
  });

  const labelEl = createElement("label", {
    className: `${name}-label`,
    attributes: { for: name },
    children: Array.isArray(children) ? [container, ...children] : [container, children],
  });

  return labelEl;
}
