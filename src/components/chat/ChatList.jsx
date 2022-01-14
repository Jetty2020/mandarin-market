import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ChatList() {
  const chatSummary = [
    {
      name: '애월읍 위니브 감귤농장',
      message: '이번에 정정 언제하맨마씸?',
      date: '2022.01.11',
      profileImage: 'img/Ellipse-1.png',
      id: 2,
    },
    {
      name: '제주감귤마을',
      message: '깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지 어쩌고 저쩌고.',
      date: '2022.01.10',
      profileImage: 'img/Ellipse-1.png',
      id: 1,
    },
    {
      name: '누구네 농장 친환경 한라봉',
      message: '내 차는 내가 평가한다. 오픈 이벤트에 참여하실라우? 깐부자너!',
      date: '2022.01.09',
      profileImage: 'img/Ellipse-1.png',
      id: 0,
    },
  ];

  return (
    <ChatListContainer>
      {chatSummary.map((chat) => (
        <ChatListItem key={chat.id} to={`/chat/${chat.id}`}>
          <ChatColumn>
            <ProfileImage src={chat.profileImage} alt="" />
            <div>
              <Name>{chat.name}</Name>
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
  margin: 24px 16px 0;
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
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -4px;
    left: -55px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.accent};
    z-index: 10;
  }
`;

const Message = styled.p`
  overflow: hidden;
  width: calc(100vw - 155px);
  color: ${(props) => props.theme.gray};
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Date = styled.span`
  width: 53px;
  margin-bottom: 5px;
  color: #dbdbdb;
  font-size: 10px;
`;

export default ChatList;
