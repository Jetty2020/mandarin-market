import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import SellingCard from './SellingCard';
import { SERVER_BASE_URL } from '../../constants';

function SellingContainer({ sellingState, whichUser }) {
  const [sellingList, setSellingList] = useState([]);
  async function getSellingInfo() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
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
  }, [whichUser]);

  return (
    <div>
      {sellingState ? (
        <CardContainer>
          <Title>판매 중인 상품</Title>
          <ScrolledBox>
            {sellingList.map((selling) => (
              <SellingCard
                key={selling.id}
                productid={selling.id}
                img={selling.itemImage}
                title={selling.itemName}
                price={selling.price}
                link={selling.link}
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
  margin-bottom: 6px;
  margin-top: 364px;
  background-color: white;
`;

const Title = styled.h4`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
`;

const ScrolledBox = styled.div`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
