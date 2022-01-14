import React from 'react';
import styled from 'styled-components';

export default function ChatDetail() {
  return (
    <ChatDetailContainer>
      <Message>
        <ProfileImage src="../img/Ellipse-1.png" />
        <MessageInfo>
          <Text>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </Text>
          <Time>12:39</Time>
        </MessageInfo>
      </Message>
      <Message>
        <ProfileImage src="../img/Ellipse-1.png" />
        <MessageInfo>
          <Text>안녕하세요. 감귤 사고싶어요요요요</Text>
          <Time>12:41</Time>
        </MessageInfo>
      </Message>
      <Message className="own">
        <MessageInfo>
          <Text>네 말씀하세요.</Text>
          <Time>12:50</Time>
        </MessageInfo>
      </Message>
      <Message className="own">
        <MessageInfo>
          <Text className="none" />
          <Image src="../img/chat-exapmle.png" />
          <Time>12:51</Time>
        </MessageInfo>
      </Message>
    </ChatDetailContainer>
  );
}

const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: calc(100vh - 60px);
  padding: 20px 16px;
  background-color: #f2f2f2;
`;

const Message = styled.div`
  display: flex;
  width: 100%;
  &.own {
    justify-content: flex-end;
    div {
      flex-direction: row-reverse;
    }
    span:first-child {
      border-color: ${(props) => props.theme.accent};
      border-top-left-radius: 10px;
      border-top-right-radius: 0px;
      background-color: ${(props) => props.theme.accent};
      color: #fff;
    }
  }
`;

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const MessageInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 9px;
`;

const Text = styled.span`
  max-width: 240px;
  padding: 12px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0px;
  background-color: #fff;
  font-size: 14px;
  line-height: 18px;
  &.none {
    display: none;
  }
`;

const Time = styled.span`
  margin: 0 6px;
  color: ${(props) => props.theme.gray};
  font-size: 10px;
`;

const Image = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
`;
