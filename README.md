# 코카-콜라 웹 사이트 리뉴얼

본 프로젝트는 개인적으로 진행한 리디자인 작업입니다.
코카콜라 및 LG생활건강과는 무관한 비공식 프로젝트입니다.

사용된 이미지 및 상표의 저작권은 각 권리자에게 있으며,
포트폴리오 용도의 비상업적 목적으로만 사용되었습니다.
상업적 의도는 없으며, 요청 시 즉시 삭제하겠습니다.

#### 

### Before & After

| Before | After |
|--------|-------|
| <img width="1920" height="1920" alt="Image" src="https://github.com/user-attachments/assets/55bcdcc0-65e3-43d7-a8a8-ade1943cc8a7" /> | <img width="1920" height="7825" alt="Image" src="https://github.com/user-attachments/assets/4c724308-4b1e-445a-84a3-00545cbe661e" /> |


## Link

- 바로가기 (web-site) : [link](https://pchan-3137.github.io/coca/) <br/>
- 기획서 (Figma-slide) : [link](https://www.figma.com/slides/Wb4sei9XzctPdpoa2EOhJ2/%ED%95%9C%EA%B5%AD-%EC%BD%94%EC%B9%B4-%EC%BD%9C%EB%9D%BC-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%EA%B8%B0%ED%9A%8D%EC%84%9C?t=YcErBtfOPoJ2mt5S-6) <br/>
- 디자인 (Figma-Design) : [link](https://www.figma.com/design/Z8KIZzOfrZoNq3ryVGJ5Tn/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1)

## 사용된 기술

`html5` `css3` `sass` `javascript`

## 실행 환경
- 최신 Chrome / Edge
- **로컬 서버 없이도 실행 가능** (모듈 없이 전역 스크립트 로드)
- 로컬 서버 실행 시 JSON 실데이터 로드 가능

## 실행 방법
### 1) 로컬 파일로 실행 (권장)
- `index.html` 더블클릭 → 바로 실행

<details>
  <summary>주요 기능 보기</summary>

## ✔ 주요 기능
### ✏ 메인 페이지

### 브랜드 소식
<img width="1526" height="950" alt="Image" src="https://github.com/user-attachments/assets/cf51f2ee-46e3-4d50-8964-248965be7b01" />

- 주요 소식 스와이퍼로 강조
- 버튼 및 스와이퍼 영역 클릭시 브랜드 소식 페이지로 이동

### 하위 브랜드 소개 섹션
<img width="1904" height="1080" alt="Image" src="https://github.com/user-attachments/assets/974267e2-2103-48c1-811f-8de5f82b86cb" />

- 대표 하위브랜드중 일부를 각 이미지 및 간략한 소개와 함께 표시
- 탭 버튼 구조

### 비디오 섹션
<img width="1901" height="1080" alt="Image" src="https://github.com/user-attachments/assets/b6bcd12c-1671-4a7c-a1da-09d9ae7ac085" />

- 스크롤 위치에 따라 비디오 크기가 변경

### 연혁 섹션
<img width="1894" height="874" alt="image" src="https://github.com/user-attachments/assets/bcf24ef2-2c35-4dcd-8500-3b0da619fd60" />

- 섹션 진입시 선 애니메이션으로 시선 유도
- aos 구조


### ✏ 브랜드 정보 페이지
![Image](https://github.com/user-attachments/assets/c74b31a0-8721-47e1-9195-1cd9aa45b239)

- aos,스크롤 애니메이션 등을 이용
- 코카콜라 브랜드에 대한 대략적인 내용

### ✏ 연혁 페이지
![Image](https://github.com/user-attachments/assets/419876e4-9c6c-41e5-8b86-09d667c84893)

- 스크롤 애니메이션 적용

### ✏ 브랜드 소식 및 사회환원 페이지
<img width="1892" height="776" alt="image" src="https://github.com/user-attachments/assets/fd700c66-e5da-42c1-b1f8-f16e110a9b1e" />
<img width="1903" height="1065" alt="image" src="https://github.com/user-attachments/assets/490ae727-eefa-46a0-be04-7010cbb305ef" />

- grid 및 popup 구조

</details>

## 파일 구조
```
/
├─ index.html
├─ login.html
├─ notice.html
├─ program.html
├─ program-depth.html
├─ sitemap.html
├─ css/
│  ├─ login.css
│  ├─ notice.css
│  ├─ pagenation.css
│  ├─ program-depth.css
│  ├─ program.css
│  ├─ style.css
│  ├─ sitemap.css
│  └─ sub-style.css
├─ js/
│  ├─ JFscript.js
│  ├─ notice.js
│  ├─ program.js
│  └─ script.js
└─ img/
```
