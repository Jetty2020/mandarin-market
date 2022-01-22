import React, { useState } from 'react';
import PageTitle from '../components/common/PageTitle';
import JoinMember from '../components/join/JoinMember';
import JoinProfile from '../components/join/JoinProfile';

// 함수명 중복 여부 헷갈림
function Join() {
  const [page, setPage] = useState(true);
  return (
    <>
      <PageTitle title="Join" />
      {page ? <JoinMember setPage={setPage} /> : <JoinProfile />}
    </>
  );
}

export default Join;
