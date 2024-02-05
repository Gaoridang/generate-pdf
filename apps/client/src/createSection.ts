import createElement from "./createElement";

function addInput(target: HTMLElement, inputName: string, addButton: HTMLElement) {
  const newInput = createElement("input", {
    type: "text",
    className: `${inputName}-input`,
    required: true,
    attributes: {
      name: `${inputName}[]`,
      placeholder: "추가 정보를 입력하세요.",
      autocomplete: "off",
    },
  });
  target.insertBefore(newInput, addButton);
}

export function createSection(sectionName: string, children: HTMLElement[]) {
  const newSection = createElement("div", {
    className: `section section-${sectionName}`,
    children: [...children],
  });

  const addButton = createElement("button", {
    text: "추가하기",
    className: `button add-${sectionName}-button`,
    onClick: (e) => {
      e.preventDefault();
      addInput(newSection, sectionName, addButton);
    },
  });

  newSection.appendChild(addButton);

  return newSection;
}
