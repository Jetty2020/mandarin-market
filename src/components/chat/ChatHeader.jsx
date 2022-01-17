import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chatSummary from './chatData.json';

export default function ChatHeader({ id }) {
  const navigate = useNavigate();
  const chatRoomName = chatSummary.data.filter((chat) => chat.id === +id);
  return (
    <ChatHeaderContainer>
      <ChatRoomTitle>
        <PrevBtn type="button" onClick={() => navigate(-1)}>
          <img src="/img/icon/icon-arrow-left.svg" alt="이전 페이지 버튼" />
        </PrevBtn>
        <RoomName>{id ? chatRoomName[0].name : null}</RoomName>
      </ChatRoomTitle>
      <MoreBtn type="button">
        <img src="/img/icon/icon- more-vertical.svg" alt="더보기 버튼" />
      </MoreBtn>
    </ChatHeaderContainer>
  );
}

ChatHeader.propTypes = {
  id: PropTypes.string,
};
ChatHeader.defaultProps = {
  id: undefined,
};

const ChatHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const ChatRoomTitle = styled.div`
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

const RoomName = styled.h3`
  margin-top: 2px;
  font-size: 14px;
  font-weight: 500;
`;

const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
`;
