import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SellingCard({ img, title, price }) {
  const tempArr = price.split('').reverse();
  const commaArr = [];

  for (let i = 0; i < tempArr.length; i += 1) {
    commaArr.push(tempArr[i]);
    if (i % 3 === 2) {
      commaArr.push(',');
    }
  }
  const commaPrice = commaArr.reverse().join('');

  return (
    <ProductCard>
      <Img src={`img/${img}`} />
      <Title>{title}</Title>
      <Price>{`${commaPrice}원`}</Price>
    </ProductCard>
  );
}

export default SellingCard;

SellingCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const ProductCard = styled.div`
  margin-right: 10px;
`;
const Img = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
`;
const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: 4px;
`;
const Price = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #f26e22;
`;
