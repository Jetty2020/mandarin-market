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
            <Account>
              <LinkBtn to={routes.loginEmail}>이메일로 로그인</LinkBtn>
            </Account>
            <Account>
              <LinkBtn to={routes.join}>회원가입</LinkBtn>
            </Account>
          </AccountList>
        </LoginBox>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 370px;
  height: 100vh;
  background-color: ${(props) => props.theme.accent};
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
  height: 200px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  color: #999;
  font-weight: 400;
`;
const AccountList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 25px;
  list-style: none;
  font-size: 14px;
`;
const Account = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 68px);
  border: 1px solid whitesmoke;
  border-color: rgba(242, 110, 34, 0.5);
  border-radius: 25px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: rgb(242, 110, 34);
  }
`;
const LinkBtn = styled(Link)`
  display: block;
  padding: 13px 0;
  width: 100%;
  text-align: center;
`;
