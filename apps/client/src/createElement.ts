type InputElementProps = {
  type?: string;
  value?: string;
  required?: boolean;
};

type ElementProps = {
  id: string;
  className: string;
  text: string;
  attributes: { [key: string]: string };
  children: HTMLElement[] | HTMLElement;
  events: { [key: string]: (this: HTMLElement, e: Event) => any };
  onChange: (this: HTMLElement, e: Event) => any;
} & InputElementProps;

export default function createElement(
  tagName: keyof HTMLElementTagNameMap,
  props?: Partial<ElementProps>
) {
  const element = document.createElement(tagName);

  if (props) {
    if (props.id) element.id = props.id;
    if (props.className) element.className = props.className;
    if (props.text) element.textContent = props.text;
    if (props.attributes) {
      Object.entries(props.attributes).forEach(([key, value]) => element.setAttribute(key, value));
    }

    if (tagName === "input") {
      const inputElement = element as HTMLInputElement;
      if (props.value) inputElement.value = props.value;
      if (props.type) inputElement.type = props.type;
      // oninput은 value가 바뀔 즉시 작동
      if (props.onChange) inputElement.oninput = props.onChange;
      if (props.required) inputElement.required = props.required;
    }

    if (props.children) {
      const children = Array.isArray(props.children) ? props.children : [props.children];
      children.forEach((child) => element.appendChild(child));
    }
    if (props.events) {
      Object.entries(props.events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
      });
    }
  }

  return element;
}
