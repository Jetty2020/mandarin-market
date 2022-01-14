import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ChatDetail from '../components/chat/ChatDetail';

function ChatRoom() {
  const { id } = useParams();
  return (
    <>
      <PageTitle title={`ChatRoom ${id}`} />
      <ChatDetail />
    </>
  );
}

export default ChatRoom;
