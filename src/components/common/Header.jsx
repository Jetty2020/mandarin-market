import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <PrevBtn type="button" onClick={() => navigate(-1)}>
        <img src="/img/icon/icon-arrow-left.svg" alt="이전 페이지 버튼" />
      </PrevBtn>
      <MoreBtn type="button">
        <img src="/img/icon/icon- more-vertical.svg" alt="더보기 버튼" />
      </MoreBtn>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const PrevBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: none;
  background: none;
`;

const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
`;
