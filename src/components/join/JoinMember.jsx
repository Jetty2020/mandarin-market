import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export default function JoinMember({ setPage }) {
  return (
    <Container>
      <h1>이메일로 회원가입</h1>
      <Form>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="이메일 주소를 입력해주세요"
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          id="password"
          name="email"
          placeholder="비밀번호를 설정해 주세요."
        />
        <LoginBtn type="button" onClick={() => setPage((page) => !page)}>
          다음
        </LoginBtn>
      </Form>
    </Container>
  );
}

JoinMember.propTypes = {
  setPage: propTypes.func.isRequired,
};

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
  color: #797979;
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
  line-height: 14px;
  :last-of-type {
    margin-top: 15px;
  }
  ::placeholder {
    color: #dbdbdb;
    font-size: 14px;
    position: absolute;
    top: 24px;
  }
  ::-webkit-input-placeholder {
    line-height: 14px;
    vertical-align: super;
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
