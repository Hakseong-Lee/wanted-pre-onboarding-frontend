import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm>
          <LoginHeader>로그인</LoginHeader>
          <LoginInput type="email" name="email" placeholder="이메일"></LoginInput>
          <LoginInput
            type="password"
            name="password"
            minLength={8}
            placeholder="비밀번호"
          ></LoginInput>
          <ButtonContainer>
            <SignUpButton>회원가입</SignUpButton>
            <SubmitButton>로그인</SubmitButton>
          </ButtonContainer>
        </LoginForm>
      </LoginContainer>
    </LoginSection>
  );
}

const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(208, 62, 103);
  background: linear-gradient(
    41deg,
    rgba(208, 62, 103, 1) 0%,
    rgba(126, 37, 157, 1) 50%,
    rgba(25, 70, 231, 1) 100%
  );
`;
const LoginContainer = styled.article`
  width: 20rem;
  display: flex;
  justify-content: flex-start;
  padding: 3rem 0;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
`;
const LoginHeader = styled.h1`
  color: #fff;
  padding-bottom: 2rem;
  font-size: 1.6rem;
`;
const LoginInput = styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 3px;
  background: transparent;
  border: none;
  margin-bottom: 0.8rem;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
`;
const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  padding-top: 3rem;
  justify-content: space-between;
`;
const SignUpButton = styled.button`
  font-size: 0.8rem;
`;
const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #1a73e8;
  border-radius: 3px;
`;

export default LoginPage;
