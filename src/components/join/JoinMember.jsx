import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';

export default function JoinMember({ setPage, setUserInfo }) {
  const [joinError, setJoinError] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    if (joinError) setJoinError('');
  }, [getValues().email]);
  const onSubmit = async (data) => {
    const response = await axios(`${SERVER_BASE_URL}/user/emailvalid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        user: {
          email: data.email,
        },
      }),
    });
    if (response.data.message === '이미 가입된 이메일 주소 입니다.') {
      setJoinError(response.data.message);
    } else {
      setUserInfo({ email: data.email, password: data.password });
      setPage(false);
    }
  };
  return (
    <Container>
      <h1>이메일로 회원가입</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="이메일 주소를 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <Error>* 이메일을 입력해주세요</Error>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Error>* 잘못된 이메일 형식입니다.</Error>
          )}
          {joinError && <Error> * {joinError}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 설정해 주세요."
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <Error>*비밀번호를 입력해주세요.</Error>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <Error>* 비밀번호는 6자 이상이어야 합니다.</Error>
          )}
        </InputWrapper>
        <NextBtn type="submit" disabled={!isValid}>
          다음
        </NextBtn>
      </Form>
    </Container>
  );
}

JoinMember.propTypes = {
  setPage: propTypes.func.isRequired,
  setUserInfo: propTypes.func.isRequired,
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
const InputWrapper = styled.div`
  position: relative;
  :first-child {
    margin-bottom: 16px;
  }
`;
const Label = styled.label`
  color: #767676;
  font-size: 12px;
  position: absolute;
  top: 0px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;
  line-height: 14px;
  :focus {
    border-bottom: 1px solid ${(props) => props.theme.accent};
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
const NextBtn = styled.button`
  width: calc(100% - 64px);
  height: 44px;
  margin-left: 32px;
  margin-top: 30px;
  padding: 0;
  background-color: ${(props) => props.theme.accent};
  border: none;
  border-radius: 44px;
  color: #fff;
  cursor: pointer;
  :disabled {
    background: #ffc7a7;
  }
`;
const Error = styled.p`
  margin: 6px 0 16px;
  font-size: 12px;
  color: #eb5757;
`;
