import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductModal from '../modal/ProductModal';

function SellingCard({ productid, img, title, price, link }) {
  const [showing, setShowing] = useState(false);
  const tempArr = String(price).split('').reverse();
  const commaArr = [];

  for (let i = 0; i < tempArr.length; i += 1) {
    commaArr.push(tempArr[i]);
    if (i % 3 === 2 && i !== tempArr.length - 1) {
      commaArr.push(',');
    }
  }
  const commaPrice = commaArr.reverse().join('');
  const showModal = () => {
    setShowing(!showing);
  };

  return (
    <>
      <ProductCard onClick={showModal}>
        <Img src={`${img}`} />
        <Title>{title}</Title>
        <Price>{`${commaPrice}원`}</Price>
      </ProductCard>
      <ProductModal
        showing={showing ? 'active' : null}
        showModal={showModal}
        list={['삭제', '수정', '웹사이트에서 상품 보기']}
        productid={productid}
        link={link}
      />
    </>
  );
}

export default SellingCard;

SellingCard.propTypes = {
  productid: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

const ProductCard = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;
const Title = styled.p`
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
`;
const Price = styled.p`
  color: #f26e22;
  font-size: 12px;
  font-weight: 700;
`;
