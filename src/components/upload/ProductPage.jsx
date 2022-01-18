import React from 'react';
import styled from 'styled-components';

export default function ProductPage() {
  const onClickUpload = (event) => {
    event.preventDefault();
    // addProduct();
  };

  return (
    <div>
      <p>상품 등록 페이지</p>
      <UploadBtn type="submit" onClick={onClickUpload} color="#F26E22">
        저장
      </UploadBtn>
    </div>
  );
}

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
  cursor: ${(props) => (props.disabled === true ? 'default' : 'pointer')};
`;
