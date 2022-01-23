import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../constants';

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <Container>
        <img src="/img/symbol-logo-W.png" alt="감귤마켓 로고" />
        <LoginBox>
          <AccountList>
            <Account>카카오톡 계정으로 로그인</Account>
            <Account>구글 계정으로 로그인</Account>
            <Account>페이스북 계정으로 로그인</Account>
          </AccountList>
          <UserSet>
            <UserSetItem>
              <Link to={routes.loginEmail}>이메일로 로그인</Link>
            </UserSetItem>
            <UserSetItem>
              <Link to={routes.join}>회원가입</Link>
            </UserSetItem>
          </UserSet>
        </LoginBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* max-width: 500px; */
  min-width: 370px;
  height: 100vh;
  /* theme accent 컬러 적용  */
  /* background-color: ${(props) => props.theme.accent}; */
  background-color: #f26e22;

  > img {
    width: 144px;
    height: 144px;
    margin-top: 204px;
  }
`;

const LoginBox = styled.div`
  position: absolute;
  bottom: 0;
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
    position: relative;
    margin-right: 12px;
  }
  :first-child&:after {
    display: block;
    content: '|';
    position: absolute;
    bottom: 1px;
    left: 84px;
    line-height: 15px;
    color: #c4c4c4;
  }
`;
