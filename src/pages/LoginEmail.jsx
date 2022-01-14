import React from 'react';
import PageTitle from '../components/common/PageTitle';
import LoginEmail from '../components/login/LoginEmail';

// 함수명 중복 여부 헷갈림
function LoginMail() {
  return (
    <>
      <PageTitle title="LoginMail" />
      <LoginEmail />
    </>
  );
}

export default LoginMail;
