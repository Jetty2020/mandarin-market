import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ChatHeader from '../components/chat/ChatHeader';
import ChatDetail from '../components/chat/ChatDetail';
import ChatInput from '../components/chat/ChatInput';

function ChatRoom() {
  const { id } = useParams();
  return (
    <>
      <PageTitle title={`ChatRoom ${id}`} />
      <ChatHeader id={id} />
      <ChatDetail />
      <ChatInput />
    </>
  );
}

export default ChatRoom;
