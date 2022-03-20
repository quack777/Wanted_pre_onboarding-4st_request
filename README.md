# ☞ REQUEST_PAGE☜(ﾟヮﾟ ☜)

- 배포주소 : [https://wantedrequire.herokuapp.com/](https://wantedrequire.herokuapp.com/)
- 기술 스택

<p align="center">
<img alt="html" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
<img alt="css3" src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
<img alt="TypeScript" src = "https://img.shields.io/badge/TypeScript-%231572B6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</p>

- 협업툴: Slack, Notion, Github

## **✔과제 구현 목록**

- 네비게이션바
    - 모바일 반응형 레이아웃
    - 햄버거 메뉴
    - 반응형 애니메이션
- 필터
    - 조건에 맞는 필터링
    - 필터링 리셋 이벤트
    - 상품명 및 상품코드
- 상품 카드
    - 견적 요청 카드
    - 카드 hover 애니메이션
    - 추가 옵션 상품 등록
    - 할인율 계산
    - 빈화면
- API 통신
- 토글과 카드 영역 연동 이벤트

## **📆개발 기간**

- 기간: 2022년 2월 7일 ~ 2022년 2월 9일 (3일간)

## **📃프로젝트 구조**

```
📦src
 ┣ 📂api
 ┃ ┣ 📜client.ts
 ┃ ┗ 📜getInforList.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂nav
 ┃ ┃ ┣ 📜Nav.tsx
 ┃ ┃ ┗ 📜SideNav.tsx
 ┃ ┗ 📂setFilter
 ┃ ┃ ┣ 📜Filter.tsx
 ┃ ┃ ┣ 📜FilterLayout.tsx
 ┃ ┃ ┗ 📜Toggle.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useInfoListState.ts
 ┣ 📂modules
 ┃ ┣ 📂filter
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┣ 📜material.ts
 ┃ ┃ ┃ ┣ 📜method.ts
 ┃ ┃ ┃ ┗ 📜toggle.ts
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜CardBoard.tsx
 ┃ ┃ ┣ 📜InfoListForm.tsx
 ┃ ┃ ┣ 📜InfoListTemplate.tsx
 ┃ ┃ ┗ 📜MainPage.tsx
 ┃ ┗ 📜RequestBodyContainer.tsx
 ┣ 📂styles
 ┃ ┣ 📜global-style.ts
 ┃ ┣ 📜styled.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜infolist.ts
 ┃ ┣ 📂props
 ┃ ┃ ┗ 📜optionalProps.ts
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📂cardboard
 ┃ ┃ ┃ ┗ 📜ContainerType.ts
 ┃ ┃ ┣ 📂infoListForm
 ┃ ┃ ┃ ┗ 📜ContainerType.ts
 ┃ ┃ ┗ 📜ButtonType.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜Router.tsx
```

## **🔎구현 기능 및 개인 역할**

> **조은총 :**
> 
> 
> [필터링] 가공방식, 재료 드롭박스 구현, 필터링 선택시 값들 전역상태에 뿌릴 수 있게 redux이용하여 구현, 필터링 스타일
> 
> [토글] 상담 중인 요청만 보기 on off 토글 구현, 토글 on off를 boolean값으로 저장 후 전역에서 사용할 수 있게 redux이용하여 구현, 토글 스타일
> 
> [배포] heroku
> 
> 
> json-server에서 받아 온 데이터를 custom Hooks인 useInfoListState 내에 있는 state에 저장시켜 주고 현재 sort된 항목에 따라 필터링 된 infoList state값을 새롭게 저장하여, 이에 맞게 화면에 조건부 랜더링되도록 기능을 구현하였습니다.
> 
> 
> 네비게이션 바, 전체적인 레이아웃, 모바일 반응형 레이아웃과 사이드 슬라이드의 구조와 애니메이션 등을 같이 구현하였습니다. 제한된 컴포넌트들 안에서만 state를 주고 받았기 때문에 리덕스를 쓰는 대신 state를 따로 선언하여 컴포넌트 간의 소통이 일어나도록 구현하였습니다. 또 styled component에서도 프로퍼티를 받아 윈도우 크기에 따라 다른 스타일이 적용되도록 만들었습니다. 
> 

## **❗소감 및 후기**

**조은총 :** 

타입스크립트와 리덕스 둘 다 익숙하지 않았는데 프로젝트를 통해 담당한 부분들을 둘 다 이용하면서 과제를 구현하니 조금이나마 타입스크립트와 리덕스를 이해할 수 있었다. 프론트엔드 개발자라면 구현해  봤을 토글, 드롭박스 기능을 구현할 때 필요한 로직들을 머리속에 확실히 정리되서 앞으로 똑같은 기능을 구현할 때 로직을 조금 더 간편하게 짤 수 있을 것이다. 필터링과 토글 값들을 전역으로 뿌리기위해 redux를 처음 사용해봤는데 하면서 redux의 사용이유와 필요성에 대해서 많이 이해할 수 있었다. 리덕스의 action, reducer, store모든 것들을 하나씩 다 짜다보니까 redux가 어떻게 로직이 구현되는지 조금이나마 더 이해할 수 있었습니다. heroku를 이용해서 배포하였는데 json-server를 이용하다보니 포트가 하나가 아닌 사이트가 되어서 server를 따로 설정해주어서 배포에 성공해서 너무 뿌듯했습니다. 


## **📕레퍼런스**

- 이 프로젝트는 [원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
