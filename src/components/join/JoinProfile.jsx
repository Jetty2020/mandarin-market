import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { routes, SERVER_BASE_URL } from '../../constants';

export default function JoinProfile({ userInfo }) {
  const [profileImg, setProfileImg] = useState('/img/basic-profile-img.png');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const [accountError, setAccountError] = useState('');
  // image 파일 선택 및 업로드
  const onUploadImage = async (e) => {
    const imageData = new FormData();
    imageData.append('image', e.target.files[0]);
    const uploadedImg = await (
      await axios.post(`${SERVER_BASE_URL}/image/uploadfile`, imageData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
    ).data;
    const imgName = uploadedImg.filename;
    setProfileImg(`${SERVER_BASE_URL}/${imgName}`);
  };
  const onSubmit = async (data) => {
    const response = await axios(`${SERVER_BASE_URL}/user/accountnamevalid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        user: {
          accountname: data.account,
        },
      }),
    });
    if (response.data.message === '이미 가입된 계정ID 입니다.') {
      setAccountError(response.data.message);
    } else {
      const joinResponse = await axios(`${SERVER_BASE_URL}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          user: {
            username: data.name,
            email: userInfo.email,
            password: userInfo.password,
            accountname: data.account,
            intro: data.intro,
            image: profileImg,
          },
        }),
      });
      if (joinResponse.data.message === '회원가입 성공') {
        navigate('/login/email');
      }
    }
  };
  return (
    <>
      <Container>
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <ImgWrapper>
          <img src={profileImg} alt="기본 프로필 이미지" />
          <ProfileIcon htmlFor="avatar">profile icon</ProfileIcon>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={onUploadImage}
            style={{ display: 'none' }}
          />
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
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors?.name?.type === 'required' && (
            <Error>* 필수입력 사항입니다. </Error>
          )}
          {errors?.name?.type === 'minLength' ||
            (errors?.name?.type === 'maxLength' && (
              <Error>* 2-10자 이내여야 합니다. </Error>
            ))}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="id">계정 ID</Label>
          <Input
            type="text"
            id="account"
            name="account"
            placeholder="영문, 숫자, 특수문자(._)만 사용 가능합니다."
            {...register('account', {
              required: true,
              pattern: /^[-._a-z0-9]+$/gi,
              maxLength: 20,
            })}
          />
          {errors?.account?.type === 'required' && (
            <Error>* 필수 입력사항입니다.</Error>
          )}
          {errors?.account?.type === 'pattern' && (
            <Error>* 영문, 숫자, 특수문자(._)만 사용 가능합니다.</Error>
          )}
          {accountError && <Error> * {accountError}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="intro">소개</Label>
          <Input
            className="intro"
            type="text"
            id="intro"
            name="intro"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            {...register('intro')}
          />
        </InputWrapper>
        <LoginBtn type="submit" disabled={!isValid}>
          감귤마켓 시작하기
        </LoginBtn>
      </Form>
    </>
  );
}

JoinProfile.propTypes = {
  userInfo: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
  }).isRequired,
};

const Container = styled.div`
  display: flex;
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
    border-radius: 100%;
  }
`;
const ProfileIcon = styled.label`
  display: block;
  content: '';
  background: url('/img/upload-file.png') center/cover;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 74px;
  left: 74px;
  border: none;
  outline: none;
  cursor: pointer;
  color: transparent;
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
