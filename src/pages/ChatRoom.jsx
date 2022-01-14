import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';

function ChatRoom() {
  const { id } = useParams();
  return (
    <div>
      <PageTitle title={`ChatRoom ${id}`} />
      <p>채팅방 내용</p>
    </div>
  );
}

export default ChatRoom;
