import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileCard from '../components/profile/ProfileCard';
import SellingContainer from '../components/profile/SellingContainer';
import FeedContainer from '../components/profile/FeedContainer';
import Navbar from '../components/common/Navbar';

function Profile(defaultProfile) {
  const account = localStorage.getItem('account');
  const accountname = useParams();
  const [sellingStatement, setSellingState] = useState(true);
  const [feedStatement, setFeedState] = useState(true);
  const [loginUser, setLoginUser] = useState(
    accountname === undefined ? account : accountname,
  );
  const feedHeaderMarginTop = sellingStatement ? '0px' : '316px';
  console.log(`${loginUser.accountname}1`);
  if (loginUser.accountname === undefined) {
    setLoginUser({ accountname: account });
  }
  return (
    <YourProfile>
      <ProfileCard loginUser={loginUser.accountname} />
      <SellingContainer sellingState={sellingStatement} />
      <FeedContainer
        feedHeaderMarginTop={feedHeaderMarginTop}
        feedState={feedStatement}
      />
      <Navbar />
    </YourProfile>
  );
}

export default Profile;

const YourProfile = styled.div`
  background-color: #f2f2f2;
  position: relative;
`;
