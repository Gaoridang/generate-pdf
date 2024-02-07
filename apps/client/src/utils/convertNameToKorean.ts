const NAMES = {
  title: "",
  position: "",
  phoneNumber: "휴대폰 번호",
  email: "이메일",
  coverLetter: "한줄 소개",
  career: "경력",
  project: "프로젝트",
  url: "포트폴리오",
};

export const convertToKorean = (name: string) => {
  return NAMES[name];
};
