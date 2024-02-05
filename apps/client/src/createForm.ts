import { inputTypes } from "./constants";
import createElement from "./createElement";
import { createLabel } from "./createLabel";
import { createDynamicSection } from "./createSection";

export function createForm() {
  const inputs = inputTypes.map((inputType) => {
    const inputEl = createElement("input", {
      className: inputType.name,
      id: inputType.name,
      type: inputType.type || "text",
      required: true,
      attributes: { name: inputType.name, placeholder: inputType.placeholder, autocomplete: "off" },
    });

    if (inputType.name === "urls") {
      return createLabel(inputType.kr, inputType.name, inputEl);
    }

    return createLabel(inputType.kr, inputType.name, inputEl);
  });

  const aboutMeContainer = createElement("div", {
    className: "about-me",
    children: [...inputs.slice(0, 5)],
  });

  const urlSection = createDynamicSection("url", "포트폴리오", "input");
  const careerSection = createDynamicSection("career", "경력");
  const projectSection = createDynamicSection("project", "프로젝트");
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

    const sections = {};
    const formElements = form.querySelectorAll("input, textarea");

    formElements.forEach((element) => {
      const inputElement = element as HTMLInputElement | HTMLTextAreaElement;
      const value = (element as HTMLInputElement).value.trim();

      if (inputElement.dataset.section) {
        const section = inputElement.dataset.section;

        if (!value) return;

        if (!sections[section]) {
          sections[section] = [];
        }

        sections[section].push(value);
      } else {
        const name = inputElement.name;
        if (!sections[name]) {
          sections[name] = [value];
        }
      }
    });

    let formDataHtml = `<div class='form-data'>`;

    Object.keys(sections).forEach((sectionName) => {
      formDataHtml += `
        <div class='${sectionName}'>
          <h2>${sectionName}</h2>
          <ul>
      `;
      sections[sectionName].forEach((value, index) => {
        formDataHtml += `<li>${value}</li>`;
      });
      formDataHtml += `</ul></div>`;
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

      const downloadLink = createElement("a") as HTMLAnchorElement;
      downloadLink.href = downloadUrl;
      downloadLink.download = "이력서.pdf";

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  });

  return form;
}
