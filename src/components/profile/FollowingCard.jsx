import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SERVER_BASE_URL } from '../../constants';

function FollowingCard({ profileImage, userName, accountName }) {
  const [followed, setFollowed] = useState(false);
  const [ownFollowingList, setOwnFollowingList] = useState([]);
  const account = localStorage.getItem('account');

  async function getOwnFollowing() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${account}/following`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setOwnFollowingList(response.data);
    response.data.forEach((follow) => {
      if (follow.accountname === accountName) {
        setFollowed(true);
      }
    });
  }

  async function addFollow() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${accountName}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowed((current) => !current);
  }

  async function removeFollow() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${accountName}/unfollow`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowed((current) => !current);
  }

  useEffect(() => {
    getOwnFollowing();
  }, []);

  return (
    <CardContainer>
      <ProfileLink to={`/profile/${accountName}`}>
        <ProfileImg src={profileImage} alt="" />
      </ProfileLink>
      <NameContainer to={`/profile/${accountName}`}>
        <User>{userName}</User>
        <Account>{accountName}</Account>
      </NameContainer>
      {followed ? (
        <UnFollowBtn
          onClick={() => {
            removeFollow();
          }}
        >
          취소
        </UnFollowBtn>
      ) : (
        <FollowBtn
          onClick={() => {
            addFollow();
          }}
        >
          팔로우
        </FollowBtn>
      )}
    </CardContainer>
  );
}

export default FollowingCard;

FollowingCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
};

const CardContainer = styled.div`
  display: flex;
  position: relative;
  height: 50px;
  margin: 4px 16px;

  &:first-child {
    margin-top: 24px;
  }
`;

const ProfileLink = styled(Link)``;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 25px;
  border: 0.5px solid #dbdbdb;
  box-sizing: border-box;
`;

const NameContainer = styled(Link)``;

const User = styled.p`
  margin-top: 5px;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
`;

const Account = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const FollowBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 0px;
  width: 56px;
  height: 26px;
  border: none;
  border-radius: 26px;
  background-color: #f26e22;
  font-size: 12px;
  font-weight: 400;
  color: white;
`;

const UnFollowBtn = styled.button`
  position: absolute;
  top: 11px;
  right: 0px;
  width: 56px;
  height: 26px;
  border: 0.5px solid #dbdbdb;
  border-radius: 26px;
  background-color: white;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;
