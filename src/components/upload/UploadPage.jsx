import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function UploadPage() {
  const [typed, setTyped] = useState('');
  const ref = useRef(null);
  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = 'auto';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);
  const onChange = (event) => {
    setTyped(event.target.value);
  };
  const onClickUpload = (event) => {
    event.preventDefault();
  };

  return (
    <UploadContainer>
      <ProfileImage src="/img/Ellipse 6.png" alt="프로필 사진" />
      <PostForm>
        <PostTextArea
          ref={ref}
          onChange={onChange}
          value={typed}
          placeholder="게시글 입력하기..."
          spellCheck="false"
        />
        <UploadBtn
          type="submit"
          onClick={onClickUpload}
          color={typed ? '#F26E22' : '#FFC7A7'}
        >
          업로드
        </UploadBtn>
        <UploadImgBtn htmlFor="uploadImage">
          <img src="../img/upload-file.png" alt="이미지 첨부" />
          <input
            type="file"
            title=" "
            accept="image/*"
            id="uploadImage"
            multiple
          />
        </UploadImgBtn>
      </PostForm>
    </UploadContainer>
  );
}

const UploadContainer = styled.main`
  display: flex;
  margin-top: 48px;
  padding: 20px 16px;
`;

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

const PostForm = styled.form`
  width: 100%;
`;

const PostTextArea = styled.textarea`
  width: 100%;
  margin-top: 12px;
  border: none;
  background: none;
  font-size: 14px;
  outline: none;
  resize: none;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const UploadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: ${(props) => props.color};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
`;

const UploadImgBtn = styled.label`
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  input[type='file'] {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;
