import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { SERVER_BASE_URL } from '../../constants';

function ProfileCard({ loginUser }) {
  const myAccount = localStorage.getItem('account');
  const [followers, setFollowers] = useState(2950);
  const [followings, setFollowings] = useState(128);
  const [followingsList, setFollowingsList] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [imgUrl, setImgUrl] = useState('img/basic-profile-img.png');
  const [followState, setFollowState] = useState(false);
  const [name, setName] = useState('대한민국 챙고 감귤농장');
  const [id, setId] = useState(myAccount);
  const [info, setInfo] = useState(
    '대한민국 감귤 전국 배송, 귤따기 체험, 감귤 농장',
  );
  const [follow, setFollow] = useState(false);

  async function getProfileInfo() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${loginUser}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowers(response.data.profile.followerCount);
    setFollowings(response.data.profile.followingCount);
    setName(response.data.profile.username);
    setId(response.data.profile.accountname);
    setInfo(response.data.profile.intro);
    setImgUrl(response.data.profile.image);
  }

  async function addFollow() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${loginUser}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowState(true);
    setFollowers((current) => current + 1);
  }

  async function removeFollow() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${loginUser}/unfollow`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowState(false);
    setFollowers((current) => current - 1);
  }

  async function getFollowing() {
    const token = localStorage.getItem('token');
    const url = SERVER_BASE_URL;
    const response = await axios(`${url}/profile/${myAccount}/following`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setFollowingsList(response.data);
    response.data.forEach((followingUser) => {
      if (followingUser.accountname === loginUser) {
        setFollowState(true);
      }
    });
  }

  useEffect(() => {
    getProfileInfo();
    getFollowing();
  }, [loginUser]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <SrOnlyHeader>{name}의 프로필</SrOnlyHeader>
        <div>
          <Link to={`/follow/${loginUser}/follower`}>{followers}</Link>
          <p>followers</p>
        </div>
        <Img src={imgUrl} alt="" />
        <div>
          <Link to={`/follow/${loginUser}/following`}>{followings}</Link>
          <p>followings</p>
        </div>
      </ProfileHeader>
      <Name>{name}</Name>
      <Id>{`@ ${id}`}</Id>
      <Info>{info}</Info>
      {loginUser === myAccount ? (
        <MyAction>
          <EditProfile>프로필 수정</EditProfile>
          <AddSelling>상품 등록</AddSelling>
        </MyAction>
      ) : (
        <Action>
          <MessageBtn />
          {followState ? (
            <UnFollowBtn
              onClick={() => {
                removeFollow();
              }}
            >
              언팔로우
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
          <ShareBtn />
        </Action>
      )}
    </ProfileContainer>
  );
}

export default ProfileCard;

ProfileCard.propTypes = {
  loginUser: PropTypes.string.isRequired,
};

const UnFollowBtn = styled.button`
  width: 120px;
  height: 34px;
  margin: 0px 10px;
  border: 0.5px solid #dbdbdb;
  border-radius: 30px;
  color: #767676;
  background-color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  margin-bottom: 6px;
  background-color: white;
  top: 0px;
  z-index: 10;
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  border: 1px solid #dbdbdb;
  border-radius: 55px;
`;

const SrOnlyHeader = styled.h4`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    margin: 30px 41px 16px 41px;
  }

  & > div {
    text-align: center;
  }

  & > div > p:first-child {
    font-size: 18px;
    font-weight: 700;
  }

  & > div:last-child > p:first-child {
    color: #767676;
  }

  & > div > p:last-child {
    font-size: 10px;
    font-weight: 400;
    color: #767676;
  }
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Id = styled.p`
  margin-top: 6px;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const Info = styled.p`
  color: #767676;
  font-size: 14px;
  font-weight: 400;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 26px;
`;

const MessageBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background-color: white;
  background-image: url('/img/icon/icon-message-circle.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const FollowBtn = styled.button`
  width: 120px;
  height: 34px;
  margin: 0px 10px;
  padding: 8px 40px 8px 41px;
  border: none;
  border-radius: 30px;
  background-color: #f26e22;
  font-size: 14px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;
const ShareBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background-color: white;
  background-image: url('/img/icon/icon-share.png');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const MyAction = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 26px;
`;

const EditProfile = styled.button`
  width: 120px;
  height: 34px;
  margin-right: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
`;

const AddSelling = styled.button`
  width: 120px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  cursor: pointer;
`;
