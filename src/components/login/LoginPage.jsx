import React from 'react';
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <div>
      <Container>
        <img src="img/symbol-logo-W.png" alt="감귤마켓 로고" />
        <LoginBox>
          <AccountList>
            <Account>카카오톡 계정으로 로그인</Account>
            <Account>구글 계정으로 로그인</Account>
            <Account>페이스북 계정으로 로그인</Account>
          </AccountList>
          <UserSet>
            <UserSetItem>이메일로 로그인</UserSetItem>
            <UserSetItem>회원가입</UserSetItem>
          </UserSet>
        </LoginBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 500px;
  min-width: 370px;
  height: 100vh;
  background-color: #ea7f42;
  /* background-color: red; */
  /* scroll 생기는 것 해결 필요  */
  /* overflow: hidden; */

  > img {
    /* center 이동시키기 */
    margin: 204px 123px 502px;
  }
`;

const LoginBox = styled.div`
  position: absolute;
  top: 525px;
  width: 100%;
  height: 300px;
  background-color: #fff;
  /* z-index: 20; */
  border-radius: 20px 20px 0 0;
  color: #767676;
`;
const AccountList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
`;
const Account = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 68px);
  height: 44px;
  border: 1px solid #999;
  border-radius: 44px;

  :first-child {
    border-color: #f2c94c;
    margin-top: 50px;
  }
  :first-child&:after {
    display: block;
    content: '';
    background: url('/img/message-circle.png') center/cover;
    width: 18px;
    height: 18px;
    position: absolute;
    left: 51px;
  }

  :nth-child(2) {
    border-color: #767676;
    margin-top: 10px;
  }
  :nth-child(2)&:after {
    display: block;
    content: '';
    background: url('/img/google.png') center/cover;
    width: 18px;
    height: 18px;
    position: absolute;
    left: 51px;
  }

  :last-child {
    border-color: #2d9cdb;
    margin-top: 10px;
  }
  :last-child&:after {
    display: block;
    content: '';
    background: url('/img/facebook.png') center/cover;
    width: 18px;
    height: 18px;
    position: absolute;
    left: 51px;
  }
`;
const UserSet = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  font-size: 12px;
`;
const UserSetItem = styled.li`
  :first-child {
    margin-right: 12px;
  }
  :first-child&:after {
    display: block;
    content: '|';
    position: absolute;
    left: 205px;
    bottom: 65px;
    line-height: 15px;
    color: #c4c4c4;
  }
`;
