type ElementProps = {
  id: string;
  className: string;
  text: string;
  attributes: { [key: string]: string };
  children: HTMLElement[] | HTMLElement;
  onClick: (this: HTMLElement, e: MouseEvent) => any;
};

export default function createElement(
  tagName: string,
  props: Partial<ElementProps>
) {
  const element = document.createElement(tagName);

  if (props) {
    if (props.id) element.id = props.id;
    if (props.className) element.className = props.className;
    if (props.text) element.textContent = props.text;
    if (props.attributes) {
      Object.entries(props.attributes).forEach(([key, value]) =>
        element.setAttribute(key, value)
      );
    }
    if (props.children) {
      const children = Array.isArray(props.children)
        ? props.children
        : [props.children];
      children.forEach((child) => element.appendChild(child));
    }
    if (props.onClick) {
      element.addEventListener("click", props.onClick);
    }
  }

  return element;
}
