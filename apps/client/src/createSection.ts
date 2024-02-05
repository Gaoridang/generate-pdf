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

    const uniqueName = `${sectionName}-list-item-${container ? container.children.length : 0}`;

    const textArea = createElement(tagName, {
      className: uniqueName,
      id: uniqueName,
      required: true,
      attributes: {
        name: uniqueName,
        placeholder: `${sectionTitle}을 입력하세요`,
        "data-section": sectionName,
      },
    });

    const item = createListItem(uniqueName, [textArea]);
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
    className: `add-${sectionName}-button`,
    text: "추가하기",
    attributes: { type: "button" },
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
