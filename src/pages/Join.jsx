import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import JoinMember from '../components/join/JoinMember';
import JoinProfile from '../components/join/JoinProfile';

// 함수명 중복 여부 헷갈림
function Join() {
  const [page, setPage] = useState(true);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <PageTitle title="Join" />
      {page ? (
        <JoinMember setPage={setPage} setUserInfo={setUserInfo} />
      ) : (
        <JoinProfile userInfo={userInfo} />
      )}
    </>
  );
}

export default Join;
