import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HomeHeader() {
  const navigate = useNavigate();

  return (
    <HomeHeaderContainer>
      <FollowTitle>
        <Name>감귤마켓 피드</Name>
      </FollowTitle>
      <SearchBtn type="button" onClick={() => navigate('/search')}>
        <img src="img/icon/icon-search.png" alt="계정 검색 버튼" />
      </SearchBtn>
    </HomeHeaderContainer>
  );
}

const HomeHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
`;

const FollowTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  margin-top: -2px;
  background: none;
  cursor: pointer;
`;

const Name = styled.h3`
  margin-top: 2px;
  font-size: 18px;
  font-weight: 500;
`;
