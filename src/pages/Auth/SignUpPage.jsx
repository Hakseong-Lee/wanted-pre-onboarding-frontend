import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signUpApi } from '../../components/Apis';

function SignUpPage() {
  const navigate = useNavigate();

  //이메일, 비밀번호, 비밀번호 확인, 정보
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: '',
  });

  //오류메시지 state
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  // 유효성 검사 state
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
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
    const passwordConfirmValidation = password !== passwordConfirm;
    if (!passwordConfirmValidation && password !== '') {
      setIsPasswordConfirm(true);
      setPasswordConfirmMessage('');
    } else {
      setIsPasswordConfirm(false);
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
    }
  }, [email, password, passwordConfirm]);

  // 버튼 활성화
  useEffect(() => {
    if (isEmail && isPassword && isPasswordConfirm) {
      setIsValid(true);
      setInputInfo({ email, password });
    } else {
      setIsValid(false);
    }
  }, [isEmail, isPassword, isPasswordConfirm]);
  // input 초기화
  const resetInput = () => {
    setInputInfo('', '');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };
  // 회원가입
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await signUpApi(inputInfo);
      localStorage.setItem('token', res.data.access_token);
      alert('회원가입에 성공하였습니다!');
      navigate('/');
    } catch (err) {
      resetInput();
      alert(err.response.data.message);
    }
  };

  return (
    <SignUpSection>
      <SignUpContainer>
        <SignUpForm>
          <SignUpHeader>회원가입</SignUpHeader>
          <Text>이메일</Text>
          <SignUpInput
            type="email"
            name="email"
            value={email}
            pattern=".[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="이메일 형식을 확인하세요."
            onChange={(e) => setEmail(e.target.value)}
          ></SignUpInput>
          {!email ? '' : <Message>{emailMessage}</Message>}
          <Text>비밀번호</Text>
          <SignUpInput
            type="password"
            name="password"
            value={password}
            pattern=".{8,}"
            required
            title="8글자 이상 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
          ></SignUpInput>
          {!password ? '' : <Message>{passwordMessage}</Message>}
          <Text>비밀번호 확인</Text>
          <SignUpInput
            type="password"
            name="password"
            value={passwordConfirm}
            pattern=".{8,}"
            required
            title="비밀번호가 일치하지 않습니다."
            onChange={(e) => setPasswordConfirm(e.target.value)}
          ></SignUpInput>
          {!passwordConfirm ? '' : <Message>{passwordConfirmMessage}</Message>}
          <ButtonContainer>
            <LoginButton onClick={() => navigate('/')}>로그인</LoginButton>
            <SignUpButton
              onClick={handleSignUp}
              className={isValid ? 'valied' : 'disabled'}
              disabled={!isValid}
            >
              회원가입
            </SignUpButton>
          </ButtonContainer>
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
  padding-bottom: 1.5rem;
  font-size: 1.5rem;
`;
const Text = styled.p`
  color: #fff;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  margin-top: 1rem;
  align-self: flex-start;
  padding-left: 3rem;
`;
const Message = styled.span`
  color: red;
  text-shadow: none;
  font-size: 0.8rem;
  align-self: flex-start;
  padding-left: 3rem;
`;
const SignUpInput = styled.input`
  width: 70%;
  margin-bottom: 0.5rem;
  padding: 0.7rem;
  border-radius: 3px;
  background: transparent;
  border: none;
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
const ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  padding-top: 2rem;
  justify-content: space-between;
`;
const SignUpButton = styled.button`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 3px;
  background-color: #1a73e8;
  &.disabled {
    opacity: 0.3;
  }
  &.disabled&:hover {
    cursor: not-allowed;
  }
`;
const LoginButton = styled.a`
  font-size: 0.8rem;
  cursor: pointer;
  padding-top: 0.5rem;
`;
export default SignUpPage;
