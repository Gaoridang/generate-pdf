import createElement from "./createElement";

function addInput(
  target: HTMLElement,
  tagName: keyof HTMLElementTagNameMap,
  name: string,
  addButton: HTMLElement
) {
  const newInput = createElement(tagName, {
    type: "text",
    className: `${name}-input`,
    required: true,
    attributes: {
      name: `${name}[]`,
      placeholder: "추가 정보를 입력하세요.",
      autocomplete: "off",
    },
  });
  target.insertBefore(newInput, addButton);
}

export function createSection(
  sectionName: string,
  children: HTMLElement[],
  tagName: keyof HTMLElementTagNameMap
) {
  const newSection = createElement("div", {
    className: `section section-${sectionName}`,
    children: [...children],
  });

  const addButton = createElement("button", {
    text: "추가하기",
    className: `button add-${sectionName}-button`,
    onClick: (e) => {
      e.preventDefault();
      addInput(newSection, tagName, sectionName, addButton);
    },
  });

  newSection.appendChild(addButton);

  return newSection;
}
