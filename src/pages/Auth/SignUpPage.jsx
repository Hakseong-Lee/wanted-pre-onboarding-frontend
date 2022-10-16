import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  //이메일, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  //오류메시지 state
  const [emailMessage, setEmailMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState(false);

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  return (
    <SignUpSection>
      <SignUpContainer>
        <SignUpForm>
          <SignUpHeader>회원가입</SignUpHeader>
          <Text>이메일</Text>
          <SignUpInput
            type="email"
            name="email"
            pattern=".[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="이메일 형식을 확인하세요."
          ></SignUpInput>
          <Text>비밀번호</Text>
          <SignUpInput
            type="password"
            name="password"
            pattern=".{8,}"
            required
            title="8글자 이상 입력해주세요."
          ></SignUpInput>
          <Text>비밀번호 확인</Text>
          <SignUpInput
            type="password"
            name="password"
            pattern=".{8,}"
            required
            title="8글자 이상 입력해주세요."
          ></SignUpInput>
          <SignUpButton>회원가입</SignUpButton>
        </SignUpForm>
      </SignUpContainer>
    </SignUpSection>
  );
}

const SignUpSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpContainer = styled.article`
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
const SignUpHeader = styled.h1`
  color: #fff;
  padding-bottom: 2rem;
  font-size: 1.5rem;
`;
const Text = styled.p`
  color: #fff;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  align-self: flex-start;
  padding-left: 3rem;
`;
const SignUpInput = styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 3px;
  background: transparent;
  border: none;
  margin-bottom: 0.8rem;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
`;
const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpButton = styled.button`
  font-size: 0.8rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #1a73e8;
  border-radius: 3px;
`;
export default SignUpPage;
