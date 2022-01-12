import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <PageTitle title="404" />
      <Img404 src="/img/icon-404.png" alt="404페이지 이미지" />
      <Text404>페이지를 찾을 수 없습니다. :(</Text404>
      <PrevBtn type="button" onClick={() => navigate(-1)}>
        이전 페이지
      </PrevBtn>
    </Container>
  );
}

export default NotFound;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 0.825rem;
`;
const Img404 = styled.img`
  filter: drop-shadow(0 5px 1px rgba(0, 0, 0, 0.25));
`;
const Text404 = styled.p`
  margin: 30px 0 20px;
  color: #999;
`;
const PrevBtn = styled.button`
  width: 120px;
  height: 44px;
  margin-bottom: 100px;
  border: 0;
  border-radius: 44px;
  background: ${(props) => props.theme.accent};
  color: #fff;
`;
