import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';
import FollowerCard from './FollowerCard';

function FollowerContainer({ whichUser }) {
  const [followerList, setFollowerList] = useState([]);

  async function getFollower() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${whichUser}/follower`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowerList(response.data);
  }

  useEffect(() => {
    getFollower();
  }, []);
  return (
    <FollowerWrapper>
      {followerList.map((follower) => (
        <FollowerCard
          key={Math.random() * 100}
          profileImage={follower.image}
          userName={follower.username}
          accountName={follower.accountname}
        />
      ))}
    </FollowerWrapper>
  );
}

export default FollowerContainer;

FollowerContainer.propTypes = {
  whichUser: PropTypes.string.isRequired,
};

const FollowerWrapper = styled.div`
  margin-bottom: 59px;
`;
