import React from 'react';
import PageTitle from '../components/common/PageTitle';
import ChatHeader from '../components/chat/ChatHeader';
import ChatList from '../components/chat/ChatList';
import Navbar from '../components/common/Navbar';

function Chat() {
  return (
    <>
      <PageTitle title="Chat" />
      <ChatHeader />
      <ChatList />
      <Navbar />
    </>
  );
}

export default Chat;
