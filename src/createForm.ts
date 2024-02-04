import createElement from "./createElement";

const inputTypes = [
  { name: "title", placeholder: "제목을 입력하세요." },
  { name: "position", placeholder: "프론트엔드 개발자" },
  { name: "phoneNumber", placeholder: "01012345678" },
  { name: "email", placeholder: "email@example.com" },
  { name: "coverLetter", placeholder: "자기소개를 입력하세요." },
  { name: "career", placeholder: "경력을 입력하세요." },
  { name: "projects", placeholder: "외부 활동이나 프로젝트를 입력하세요." },
  { name: "urls", placeholder: "추가적인 링크를 넣어주세요." },
];

export function createForm() {
  const inputs = inputTypes.map((inputType) => {
    const inputEl = createElement("input", {
      className: inputType.name,
      type: "text",
      required: true,
      attributes: { name: inputType.name, placeholder: inputType.placeholder },
    });
    return inputEl;
  });

  const button = createElement("button", {
    className: "submit-button",
    type: "submit",
    text: "PDF로 변환하기",
  });

  const aboutMeContainer = createElement("div", {
    className: "about-me",
    children: [...inputs.slice(0, 5)],
  });

  const careerContainer = createElement("div", {
    className: "careers",
    children: [...inputs.slice(5)],
  });

  const form = createElement("form", {
    className: "form",
    children: [aboutMeContainer, careerContainer, button],
    attributes: { action: "#", method: "POST" },
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {};

    inputTypes.forEach((inputType) => {
      const inputEl = document.querySelector(
        `form input[name=${inputType.name}]`
      ) as HTMLInputElement;
      if (inputEl) {
        formData[inputType.name] = inputEl.value;
      }
    });

    console.log(formData);
  });

  return form;
}
