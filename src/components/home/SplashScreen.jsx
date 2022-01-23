import React from 'react';
import styled from 'styled-components';

export default function SplashScreen() {
  return (
    <Container>
      <img src="/img/full-logo.png" alt="감귤마켓 로고" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 370px;
  height: 100vh;

  > img {
    width: 200px;
    height: 200px;
    margin: 270px 95px 374px;
  }
`;
