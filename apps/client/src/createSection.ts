import createElement from "./createElement";

export function addElement(
  target: HTMLElement,
  tagName: keyof HTMLElementTagNameMap,
  name: string
) {
  const newEl = createElement(tagName, {
    type: "text",
    className: `${name}-input`,
    required: true,
    attributes: {
      name: `${name}[]`,
      placeholder: "추가 정보를 입력하세요.",
      autocomplete: "off",
    },
  });
  target.insertAdjacentElement("beforeend", newEl);
}

export function createSection(sectionName: string, children: HTMLElement[]) {
  const newSection = createElement("div", {
    className: `section section-${sectionName}`,
    children: [...children],
  });

  return newSection;
}
