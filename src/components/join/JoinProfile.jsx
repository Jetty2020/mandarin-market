import React from 'react';
import styled from 'styled-components';

export default function JoinProfile() {
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
      <Form>
        <Label htmlFor="name">사용자 이름</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="2-10자 이내여야 합니다."
        />
        <Label htmlFor="id">계정 ID</Label>
        <Input
          type="text"
          id="id"
          name="id"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <Label htmlFor="intro">소개</Label>
        <Input
          type="text"
          id="intro"
          name="intro"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </Form>
      <LoginBtn type="submit">감귤마켓 시작하기</LoginBtn>
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
const Label = styled.label`
  color: #797979;
  font-size: 12px;
  position: absolute;
  :nth-of-type(2) {
    top: 64px;
  }
  :last-of-type {
    top: 128px;
  }
`;
const Input = styled.input`
  border: none;
  height: 48px;
  border-bottom: 1px solid #dbdbdb;
  line-height: 14px;
  /* margin-bottom: 16px; */
  :not(:last-child) {
    margin-bottom: 16px;
  }
  /* :last-of-type {
    margin-top: 15px;
  } */
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
