import React from 'react';
import PageTitle from '../components/common/PageTitle';
import Header from '../components/common/Header';
import ChatList from '../components/chat/ChatList';
import Navbar from '../components/common/Navbar';

function Chat() {
  return (
    <>
      <PageTitle title="Chat" />
      <Header />
      <ChatList />
      <Navbar />
    </>
  );
}

export default Chat;
