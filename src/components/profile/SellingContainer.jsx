import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import SellingCard from './SellingCard';

function SellingContainer({ sellingState, whichUser }) {
  const [sellingList, setSellingList] = useState([]);
  async function getSellingInfo() {
    const token = localStorage.getItem('token');
    const url = 'http://146.56.183.55:5050';
    const response = await axios(`${url}/product/${whichUser}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setSellingList(response.data.product);
  }

  useEffect(() => {
    getSellingInfo();
  }, []);

  return (
    <div>
      {sellingState ? (
        <CardContainer>
          <Title>판매 중인 상품</Title>
          <ScrolledBox>
            {sellingList.map((selling) => (
              <SellingCard
                key={selling.id}
                img={selling.itemImage}
                title={selling.itemName}
                price={selling.price}
              />
            ))}
          </ScrolledBox>
        </CardContainer>
      ) : null}
    </div>
  );
}

SellingContainer.propTypes = {
  sellingState: PropTypes.bool.isRequired,
  whichUser: PropTypes.string.isRequired,
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
