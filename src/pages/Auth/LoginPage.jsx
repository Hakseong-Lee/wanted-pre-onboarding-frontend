import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  //이메일, 비밀번호
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //오류메시지 state
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // 유효성 검사 state
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // 유효성 검사
  useEffect(() => {
    const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const emailValidation = emailRegex.test(email);
    if (emailValidation) {
      setIsEmail(true);
      setEmailMessage('');
    } else {
      setIsEmail(false);
      setEmailMessage('이메일 형식을 확인하세요.');
    }
    const passwordValidation = password.length < 8;
    if (!passwordValidation) {
      setIsPassword(true);
      setPasswordMessage('');
    } else {
      setIsPassword(false);
      setPasswordMessage('8글자 이상 입력하세요.');
    }
  }, [email, password]);

  useEffect(() => {
    if (isEmail && isPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isEmail, isPassword]);
  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm>
          <LoginHeader>로그인</LoginHeader>
          <LoginInput
            type="email"
            name="email"
            value={email}
            pattern=".[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            title="Ex) wanted@gmail.com"
            placeholder="이메일을 입력하세요."
            onChange={(e) => setEmail(e.target.value)}
          ></LoginInput>
          <LoginInput
            type="password"
            name="password"
            value={password}
            pattern=".{8,}"
            required
            title="8글자 이상 입력해주세요."
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => setPassword(e.target.value)}
          ></LoginInput>
          {!email ? '' : <Message>{emailMessage}</Message>}
          {!password ? '' : <Message>{passwordMessage}</Message>}
          <ButtonContainer>
            <SignUpButton onClick={() => navigate('/signup')}>회원가입</SignUpButton>
            <SubmitButton className={isValid ? 'valied' : 'disabled'} disabled={!isValid}>
              로그인
            </SubmitButton>
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
const SignUpButton = styled.a`
  font-size: 0.8rem;
  cursor: pointer;
  padding-top: 0.5rem;
`;
const SubmitButton = styled.button`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #1a73e8;
  &.disabled {
    opacity: 0.3;
  }
  &.disabled&:hover {
    cursor: not-allowed;
  }
  border-radius: 3px;
`;
const Message = styled.span`
  color: red;
  text-shadow: none;
  font-size: 0.8rem;
  align-self: flex-start;
  padding-left: 3rem;
`;

export default LoginPage;
