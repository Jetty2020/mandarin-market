import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function AlertPopUp({ visible, onClose }) {
  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <PopUpModalContainer tabIndex="-1" visible={visible}>
        <Text>이미지는 최대 3개까지 업로드할 수 있습니다.</Text>
        <Button type="button" onClick={close}>
          확인
        </Button>
      </PopUpModalContainer>
      <Dimed visible={visible} />
    </>
  );
}

AlertPopUp.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};
AlertPopUp.defaultProps = {
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
  text-align: center;
  line-height: 1.2em;
  word-break: keep-all;
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
  padding: 0 30px;
  margin-top: 3px;
  font-size: 15px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 100%;
  height: calc(100% - 64px);
  border: none;
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -3px;
  background: none;
  color: ${(props) => props.theme.accent};
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s all ease;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`;
