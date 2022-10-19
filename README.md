# 원티드 프리온보딩 프론트엔드 - 선발 과제

## :gem: 배포 링크

https://main--taupe-stroopwafel-f7950b.netlify.app/todo


## :round_pushpin: 프로젝트 실행 방법

<br>

```
git clone https://github.com/Hakseong-Lee/wanted-pre-onboarding-frontend.git
```

```
npm install
```

```
npm start
```

## :movie_camera: 데모 영상

### 회원가입

  <img width= 60% src="https://user-images.githubusercontent.com/83964261/196718584-ba44f71f-f94d-4b1d-92ad-aff08e57645c.gif">

### 로그인

  <img width= 60% src="https://user-images.githubusercontent.com/83964261/196719300-32ce5ebc-8976-44ea-8619-3a7d38550001.gif">

### Todo 기능

  <img width= 60% src="https://user-images.githubusercontent.com/83964261/196719386-2f1ec743-af97-4a54-82f5-c7f1b72c61bf.gif">

## :hammer: 사용 기술 스택

- react (CRA)
- react-router-dom v6
- axios
- styled-components
- react-icons
- eslint, prettier

## :white_check_mark: 기능 구현 체크리스트

### 1. 로그인 / 회원가입

Assignment1

- [x] 이메일과 비밀번호의 유효성 검사기능을 구현
- [x] 이메일 조건: `@` 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

Assignment2

- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동
- [x] 응답받은 JWT는 로컬 스토리지에 저장

Assignment3

- [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 /todo 경로로 리다이렉트
- [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트

### 2. 투두 리스트

Assignment4

- [x] /todo경로에 접속하면 투두 리스트의 목록
- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

Assignment5

- [x] 투두 리스트의 수정, 삭제 기능을 구현
- [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정
- [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
- [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제
