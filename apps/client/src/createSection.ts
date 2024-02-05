import createElement from "./createElement";
import { createListItem } from "./createUList";

export function handleAddElement(
  sectionName: string,
  sectionTitle: string,
  tagName: keyof HTMLElementTagNameMap
) {
  return (e: Event) => {
    e.preventDefault();
    const container = document.querySelector(`.${sectionName}-list`);

    if (!container) {
      console.error("Container not found");
      return;
    }

    const textArea = createElement(tagName, {
      className: `${sectionName}-list-item-${container ? container.children.length : 0}`,
      id: `${sectionName}-list-item-${container ? container.children.length : 0}`,
      required: true,
      attributes: { name: sectionName, placeholder: `${sectionTitle}을 입력하세요` },
    });

    const item = createListItem(
      `${sectionName}-list-item-${container ? container.children.length : 0}`,
      [textArea]
    );
    container.appendChild(item);
  };
}

export function createDynamicSection(
  sectionName: string,
  sectionTitle: string,
  tagName: keyof HTMLElementTagNameMap = "textarea"
) {
  const title = createElement("span", {
    text: sectionTitle,
  });

  const addElementButton = createElement("button", {
    type: "button",
    className: `add-${sectionName}-button`,
    text: "추가하기",
    events: {
      click: handleAddElement(sectionName, sectionTitle, tagName),
    },
  });

  const sectionChildren = [
    createElement("div", { className: "title-area", children: [title, addElementButton] }),
  ];

  const list = createElement("ul", { className: `${sectionName}-list` });
  sectionChildren.push(list);

  const section = createElement("section", {
    className: `section ${sectionName}-section`,
    children: sectionChildren,
  });

  return section;
}
