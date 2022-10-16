import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <Container>
      <LoginBox>안녕하세요</LoginBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LoginBox = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default LoginPage;
