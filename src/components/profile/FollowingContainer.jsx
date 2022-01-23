import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';
import FollowingCard from './FollowingCard';

function FollowingContainer({ loginUser }) {
  const [followingList, setFollowingList] = useState([]);

  async function getFollowing() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(
      `${url}/profile/${loginUser}/following/?limit=10000`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    setFollowingList(response.data);
  }

  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <FollowingWrapper>
      {followingList.map((follow) => (
        <FollowingCard
          key={Math.random() * 100}
          profileImage={follow.image}
          userName={follow.username}
          accountName={follow.accountname}
        />
      ))}
    </FollowingWrapper>
  );
}

export default FollowingContainer;

FollowingContainer.propTypes = {
  loginUser: PropTypes.string.isRequired,
};

const FollowingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;
`;
