import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { routes } from '../../constants';

export default function JoinProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <ImgWrapper>
          <img src="/img/basic-profile-img.png" alt="기본 프로필 이미지" />
          <UploadProfile />
        </ImgWrapper>
      </Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor="name">사용자 이름</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="2-10자 이내여야 합니다."
            {...register('name', {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <Error>* 필수입력 사항입니다. </Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="id">계정 ID</Label>
          <Input
            type="text"
            id="account"
            name="account"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            {...register('account', {
              required: true,
              pattern: /^[-._a-z0-9]+$/gi,
              maxLength: 20,
            })}
          />
          {errors.account && errors.account.type === 'required' && (
            <Error>* 필수 입력사항입니다.</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="intro">소개</Label>
          <Input
            className="intro"
            type="text"
            id="intro"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </InputWrapper>
        <LoginBtn type="submit" disabled={!isValid}>
          <Link to={routes.profile}>감귤마켓 시작하기</Link>
        </LoginBtn>
      </Form>
    </>
  );
}

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  > h1 {
    margin: 54px 0 12px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
  > p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #767676;
    margin: 0 0 30px;
  }
`;
const ImgWrapper = styled.div`
  position: relative;
  > img {
    width: 110px;
    margin-bottom: 30px;
  }
`;
const UploadProfile = styled.span`
  display: block;
  content: '';
  background: url('/img/upload-file.png') center/cover;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 74px;
  left: 74px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 34px;
  position: relative;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const Label = styled.label`
  color: #797979;
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
  /* margin-bottom: 16px; */
  /* &:not(:last-child) {
    margin-bottom: 16px;
  } */
  :not(.intro) {
    margin-bottom: 16px;
  }
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
  :disabled {
    background: #ffc7a7;
  }
`;

const Error = styled.p`
  margin: -10px 0 16px;
  font-size: 12px;
  color: #eb5757;
`;
