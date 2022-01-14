import React from 'react';
import { Link } from 'react-router-dom';

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
      message: '깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지 어쩌고',
      date: '2022.01.10',
      profileImage: 'img/Ellipse-1.png',
      id: 1,
    },
    {
      name: '누구네 농장 친환경 한라봉',
      message: '내 차는 내가 평가한다. 오픈 이벤트에 참여하실라우?',
      date: '2022.01.09',
      profileImage: 'img/Ellipse-1.png',
      id: 0,
    },
  ];

  return (
    <div>
      {chatSummary.map((chat) => (
        <Link key={chat.id} to="/chat:id">
          <div>
            <img src="{chat.profileImage}" alt="" />
            <div>
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>
          </div>
          <div>
            <span>{chat.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatList;
