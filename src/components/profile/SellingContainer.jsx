import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SellingCard from './SellingCard';

function SellingContainer({ sellingState }) {
  return (
    <div>
      {sellingState ? (
        <CardContainer>
          <Title>판매 중인 상품</Title>
          <ScrolledBox>
            <SellingCard
              img="product-img-example.png"
              title="애월읍 노지 감귤"
              price="35000"
            />
            <SellingCard
              img="product-img-example.png"
              title="애월읍 노지 낑깡"
              price="6000"
            />
            <SellingCard
              img="product-img-example.png"
              title="애월읍 노지 감귤[특가]"
              price="32000"
            />
          </ScrolledBox>
        </CardContainer>
      ) : null}
    </div>
  );
}

SellingContainer.propTypes = {
  sellingState: PropTypes.bool.isRequired,
};

export default SellingContainer;

const CardContainer = styled.div`
  padding: 20px 21px;
  background-color: white;
  margin-bottom: 6px;
  margin-top: 316px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ScrolledBox = styled.div`
  display: flex;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
