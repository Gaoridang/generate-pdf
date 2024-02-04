import createElement from "./createElement";
import { createSection } from "./createSection";

const inputTypes = [
  { name: "title", placeholder: "제목을 입력하세요." },
  { name: "position", placeholder: "프론트엔드 개발자" },
  { name: "phoneNumber", placeholder: "01012345678", type: "tel" },
  { name: "email", placeholder: "email@example.com", type: "email" },
  { name: "coverLetter", placeholder: "자기소개를 입력하세요." },
  { name: "career", placeholder: "경력을 입력하세요." },
  { name: "projects", placeholder: "외부 활동이나 프로젝트를 입력하세요." },
  { name: "urls", placeholder: "추가적인 링크를 넣어주세요." },
];

export function createForm() {
  const inputs = inputTypes.map((inputType) => {
    const inputEl = createElement("input", {
      className: inputType.name,
      type: inputType.type || "text",
      required: true,
      attributes: { name: inputType.name, placeholder: inputType.placeholder, autocomplete: "off" },
    });
    return inputEl;
  });

  // FIXME: 엔터 누르면 커리어 인풋이 추가됨(?)
  const careerSection = createSection("career", [inputs[5]]);
  const projectSection = createSection("project", [inputs[6]]);
  const urlSection = createSection("url", [inputs[7]]);

  const aboutMeContainer = createElement("div", {
    className: "about-me",
    children: [...inputs.slice(0, 5)],
  });

  const careerContainer = createElement("div", {
    className: "careers",
    children: [careerSection, projectSection, urlSection],
  });

  const submitButton = createElement("button", {
    className: "submit-button",
    type: "submit",
    text: "PDF로 변환하기",
  });

  const form = createElement("form", {
    className: "form",
    children: [aboutMeContainer, careerContainer, submitButton],
    attributes: { action: "#", method: "POST" },
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formDataHtml = `<div class='form-data'>`;

    inputTypes.forEach((inputType) => {
      const inputEl = document.querySelector(`input[name="${inputType.name}"]`) as HTMLInputElement;
      if (inputEl) {
        formDataHtml += `
          <div class=${inputType.name}-container>
            <h2>${inputType.name}</h2>
            <p>${inputEl.value}</p>
          </div>
        `;
      }
    });

    formDataHtml += "</div>";

    console.log(formDataHtml);

    try {
      const response = await fetch("http://localhost:5001/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ htmlContent: formDataHtml }),
      });

      if (!response.ok) throw new Error("Failed to generate PDF");
      // pdf download url
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      window.open(downloadUrl, "_blank");
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  });

  return form;
}
