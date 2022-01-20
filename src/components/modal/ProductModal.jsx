import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductPopUp from './ProductPopUp';

export default function ProductModal({
  list,
  showing,
  showModal,
  productid,
  link,
}) {
  const navigate = useNavigate();
  const [visiblePop, setVisiblePop] = useState(false);
  const openPopUp = () => {
    setVisiblePop(true);
  };
  const closePopUp = () => {
    setVisiblePop(false);
  };
  const onDimedClick = (e) => {
    if (e.target === e.currentTarget) {
      showModal();
    }
  };
  const showUpdate = () => {
    navigate(`/product/${productid}`);
  };
  const showProduct = () => {
    window.open(link, '_blank');
  };
  const menuAction = [openPopUp, showUpdate, showProduct];

  return (
    <>
      <ModalContainer className={showing}>
        <CloseBar onClick={showModal} />
        <ul>
          {list.map((item, index) => (
            <MenuItem key={item} onClick={menuAction[index]}>
              {item}
            </MenuItem>
          ))}
        </ul>
        {visiblePop && (
          <ProductPopUp
            visible={visiblePop}
            onClose={closePopUp}
            productid={productid}
          />
        )}
      </ModalContainer>
      <Dimed className={showing} onClick={onDimedClick} />
    </>
  );
}

ProductModal.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  showing: PropTypes.string,
  showModal: PropTypes.func.isRequired,
  productid: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
ProductModal.defaultProps = {
  showing: null,
};

const ModalContainer = styled.div`
  position: fixed;
  bottom: -192px;
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
  cursor: pointer;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  padding: 0 26px;
  font-size: 14px;
  cursor: pointer;
`;

const Dimed = styled.div`
  display: none;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 499;
  outline: 0;
  &.active {
    display: block;
  }
`;
