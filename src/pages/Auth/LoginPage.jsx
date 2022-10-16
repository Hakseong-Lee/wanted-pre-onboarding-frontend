import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const handleSignUpButton = () => {
    navigate('/signup');
  };
  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm>
          <LoginHeader>로그인</LoginHeader>
          <LoginInput
            type="email"
            name="email"
            pattern=".[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            title="Ex) wanted@gmail.com"
            placeholder="이메일을 입력하세요."
          ></LoginInput>
          <LoginInput
            type="password"
            name="password"
            pattern=".{8,}"
            required
            title="8글자 이상 입력해주세요."
            placeholder="비밀번호를 입력하세요."
          ></LoginInput>
          <ButtonContainer>
            <SignUpButton onClick={handleSignUpButton}>회원가입</SignUpButton>
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
  font-size: 1.5rem;
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
  padding-top: 2rem;
  justify-content: space-between;
`;
const SignUpButton = styled.button`
  font-size: 0.8rem;
`;
const SubmitButton = styled.button`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #1a73e8;
  border-radius: 3px;
`;

export default LoginPage;
