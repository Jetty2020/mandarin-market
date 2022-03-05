import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function SplashScreen() {
  return (
    <Container>
      <img src="/img/full-logo.png" alt="감귤마켓 로고" />
    </Container>
  );
}

const splashAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  animation: ${splashAnimation} 1s ease-in-out forwards;
  animation-delay: 0.5s;
  > img {
    width: 200px;
    height: 200px;
    margin: 270px 95px 374px;
  }
`;
