import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function PopUpModal({ visible, onClose }) {
  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <PopUpModalContainer tabIndex="-1" visible={visible}>
        <Text>로그아웃하시겠어요?</Text>
        <Button type="button" onClick={close}>
          취소
        </Button>
        <Button type="button">로그아웃</Button>
      </PopUpModalContainer>
      <Dimed visible={visible} />
    </>
  );
}

PopUpModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
PopUpModal.defaultProps = {
  visible: false,
  onClose: true,
};

const PopUpModalContainer = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const Dimed = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;
  outline: 0;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 50%;
  height: calc(100% - 64px);
  border: none;
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  border-bottom-left-radius: 10px;
  background: none;
  font-size: 14px;
  transition: 0.2s all ease;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
  &:last-child {
    border-left: 1px solid rgba(219, 219, 219, 0.5);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 10px;
    color: ${(props) => props.theme.accent};
    font-weight: 500;
  }
`;
