# 이력서를 PDF로 변환

이력서를 내가 원하는 일정한 형식의 PDF로 자동 변환하기 위해 만든 프로젝트입니다.

## 시작하게 된 계기

너무 React에 집중하다보니, 자바스크립트 자체를 잊어버리는 것 같아서 해당 기능을 개발하며 자바스크립트를 다시 공부하고자 했습니다. 가장 핵심이 되는 라우팅과 엘리먼트 생성을 공부하기 위해 이력서 PDF 변환 프로젝트를 시작하게 되었습니다.

## 얻게 된 것

### 리액트 없이 프로젝트를 만드는 경험

항상 CRA, VITE를 사용해서 리액트 프로젝트를 시작하다보니 리액트 없이 프로젝트를 만들 수 있을까라는 생각이 들었습니다. 이 프로젝트를 통해 리액트가 엘리먼트를 만드는 방식을 조금 더 이해하고, 해시를 이용한 라우팅 기능을 구현해 볼 수 있었습니다.

### Webpack을 이용한 번들링

직접 설정한 webpack 설정 파일을 통해 번들링을 해보면서 webpack의 핵심 기능에 대해 이해할 수 있었습니다. `entry` 와 `output` 을 내 입맛에 맞게 설정하고, `html-webpack-plugin` 을 이용해 메타 태그를 추가하고, `style-loader`, `css-loader` 를 이용해 스타일을 주입할 수 있었습니다. 마지막으로 자바스크립트를 타입스크립트로 마이그레이션 할 때 필요한 설정도 알아볼 수 있었습니다.

### AWS EC2 배포

NodeJS 서버를 AWS EC2에 배포하면서, 서버를 운영하는데 필요한 기본적인 지식을 습득할 수 있었습니다. 터미널에서 pem 키를 이용해 Ubuntu EC2에 접속하고 서버를 실행시킨 뒤, pm2를 활용해 24시간 백그라운드에서 서버를 실행시키는 경험을 해볼 수 있었습니다.

## 기술 스택

### FE

<!-- typescript, webpack,  -->
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> 
<img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white">

### BE

<!-- nodejs, typescript, express, zod, puppeteer, eslint,  -->
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

<img src="https://img.shields.io/badge/zod-2F7BC3?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white">

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

## 스크린샷
https://github.com/Gaoridang/generate-pdf/assets/123650056/1a18e384-8f6f-4e99-9a04-584baf81ee95

## 앞으로 할 작업
- PDF 스타일링
- 클라이언트 페이지 스타일링
- 경력, 포트폴리오 일반 input에서 정해진 형식으로 바꾸기
- 구글 애널리틱스 연결 및 도메인 구입

## 추가
### 라이트하우스 점수
<img width="300" alt="스크린샷 2024-02-04 오후 11 35 50" src="https://github.com/Gaoridang/generate-pdf/assets/123650056/83ace4cd-ecee-4c98-bc31-8dc7f54792a7">
