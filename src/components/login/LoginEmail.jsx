import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../constants';

export default function LoginEmail() {
  return (
    <Container>
      <h1>로그인</h1>
      <Form>
        <Label htmlFor="email">이메일</Label>
        <Input type="text" id="email" name="email" />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" name="email" />
      </Form>
      <LoginBtn type="submit">로그인</LoginBtn>
      <RegisterLink>
        <Link to={routes.join}>이메일로 회원가입</Link>
      </RegisterLink>
    </Container>
  );
}

const Container = styled.div`
  > h1 {
    margin-top: 54px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 34px 0;
  position: relative;
`;
const Label = styled.label`
  color: #767676;
  font-size: 12px;
  position: absolute;
  :last-of-type {
    top: 64px;
  }
`;
const Input = styled.input`
  border: none;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;
  :last-of-type {
    margin-top: 15px;
  }
`;

const LoginBtn = styled.button`
  width: calc(100% - 64px);
  height: 44px;
  margin-left: 32px;
  margin-top: 30px;
  padding: 0;
  background-color: ${(props) => props.theme.accent};
  border: none;
  border-radius: 44px;
  color: #fff;
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;
