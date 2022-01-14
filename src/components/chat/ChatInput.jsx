import React, { useState } from 'react';
import styled from 'styled-components';

export default function ChatInput() {
  const [uploaded, setUploaded] = useState('');
  const [typed, setTyped] = useState('');
  const onAttach = (event) => setUploaded(event.target.value);
  const onChange = (event) => {
    setTyped(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    if (typed === '' && uploaded === '') {
      return;
    }
    setUploaded('');
    setTyped('');
  };

  return (
    <ChatReplyForm method="post">
      <label htmlFor="uploadImage">
        <img src="../img/img-button.png" alt="이미지 첨부" />
        <input
          type="file"
          title=" "
          onChange={onAttach}
          value={uploaded}
          accept="image/*"
          id="uploadImage"
          multiple
        />
      </label>
      <InputMessage
        type="text"
        onChange={onChange}
        value={typed}
        placeholder="메시지 입력하기..."
        spellCheck="false"
        autoComplete="off"
        name="submitMessage"
      />
      <SubmitButton
        type="submit"
        onClick={onClick}
        color={typed || uploaded ? '#F26E22' : '#C4C4C4'}
      >
        전송
      </SubmitButton>
    </ChatReplyForm>
  );
}

const ChatReplyForm = styled.form`
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-top: 1px solid #dbdbdb;
  height: 59px;
  & label {
    margin-right: 18px;
    cursor: pointer;
    img {
      width: 36px;
      height: 36px;
    }
  }
  & input[type='file'] {
    overflow: hidden;
    position: absolute;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    width: 1px;
    clip: rect(0, 0, 0, 0);
  }
`;

const InputMessage = styled.input`
  width: calc(100vw - 140px);
  font-size: 14px;
  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  width: 70px;
  height: 100%;
  border: none;
  background: none;
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  cursor: pointer;
`;
