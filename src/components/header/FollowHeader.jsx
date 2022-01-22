import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function FollowHeader({ name }) {
  const navigate = useNavigate();

  return (
    <FollowHeaderContainer>
      <FollowTitle>
        <PrevBtn type="button" onClick={() => navigate(-1)}>
          <img src="/img/icon/icon-arrow-left.svg" alt="이전 페이지 버튼" />
        </PrevBtn>
        <Name>{name}</Name>
      </FollowTitle>
    </FollowHeaderContainer>
  );
}

FollowHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

const FollowHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const FollowTitle = styled.div`
  display: flex;
  align-items: center;
`;

const PrevBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Name = styled.h3`
  margin-top: 2px;
  font-size: 14px;
  font-weight: 500;
`;
