import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chatSummary from './chatData.json';

function ChatList() {
  return (
    <ChatListContainer>
      {chatSummary.data.map((chat) => (
        <ChatListItem key={chat.id} to={`/chat/${chat.id}`}>
          <ChatColumn>
            <ProfileImage src={chat.profileImage} alt="" />
            <div>
              <Name>
                {chat.name}
                <New isRead={chat.isRead} />
              </Name>
              <Message>{chat.message}</Message>
            </div>
          </ChatColumn>
          <ChatColumn>
            <Date>{chat.date}</Date>
          </ChatColumn>
        </ChatListItem>
      ))}
    </ChatListContainer>
  );
}

const ChatListContainer = styled.div`
  margin: 72px 16px 0;
`;

const ChatListItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ChatColumn = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(2n) {
    align-items: flex-end;
  }
`;

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const Name = styled.h4`
  position: relative;
  margin-bottom: 4px;
  font-size: 14px;
`;

const New = styled.span`
  display: ${(props) => (props.isRead ? 'none' : 'block')};
  position: absolute;
  top: -4px;
  left: -55px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accent};
  z-index: 10;
`;

const Message = styled.p`
  overflow: hidden;
  width: calc(100vw - 155px);
  color: ${(props) => props.theme.gray};
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Date = styled.span`
  width: 53px;
  margin-bottom: 5px;
  color: #dbdbdb;
  font-size: 10px;
`;

export default ChatList;
