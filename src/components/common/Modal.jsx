import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PopUpModal from './PopUpModal';

export default function Modal({ list, showing, showModal }) {
  Modal.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    showing: PropTypes.string,
    showModal: PropTypes.func.isRequired,
  };
  Modal.defaultProps = {
    showing: null,
  };
  const [visiblePop, setVisiblePop] = useState(false);
  const openPopUp = () => {
    setVisiblePop(true);
  };
  const closePopUp = () => {
    setVisiblePop(false);
  };
  return (
    <ModalContainer className={showing}>
      <CloseBar onClick={showModal} />
      <ul>
        {list.map((item) => (
          <MenuItem key={item} onClick={item === '로그아웃' ? openPopUp : null}>
            {item}
          </MenuItem>
        ))}
      </ul>
      {visiblePop && <PopUpModal visible={visiblePop} onClose={closePopUp} />}
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  bottom: -146px;
  left: 0;
  right: 0;
  padding: 36px 0 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
  z-index: 500;
  transition: 0.5s all ease;
  &.active {
    bottom: 0px;
  }
`;

const CloseBar = styled.button`
  position: absolute;
  top: 16px;
  left: 50%;
  width: 50px;
  height: 4px;
  border: none;
  border-radius: 5px;
  background-color: #dbdbdb;
  transform: translateX(-50%);
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 0 26px;
  font-size: 14px;
`;
