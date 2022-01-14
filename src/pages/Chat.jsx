import React from 'react';
import PageTitle from '../components/common/PageTitle';
import ChatList from '../components/chat/ChatList';
import Navbar from '../components/common/Navbar';

function Chat() {
  return (
    <div>
      <PageTitle title="Chat" />
      <ChatList />
      <Navbar />
    </div>
  );
}

export default Chat;
