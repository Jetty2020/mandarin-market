import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileCard from '../components/profile/ProfileCard';
import SellingContainer from '../components/profile/SellingContainer';
import FeedContainer from '../components/profile/FeedContainer';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';

function Profile(defaultProfile) {
  const account = localStorage.getItem('account');
  const { accountname } = useParams();
  const [sellingStatement, setSellingState] = useState(true);
  const [feedStatement, setFeedState] = useState(true);
  const [loginUser, setLoginUser] = useState(
    typeof accountname === 'undefined' ? account : accountname,
  );
  const feedHeaderMarginTop = sellingStatement ? '0px' : '316px';

  return (
    <YourProfile>
      <PageTitle title="Profile" />
      <ProfileCard loginUser={loginUser} />
      <SellingContainer sellingState={sellingStatement} whichUser={loginUser} />
      <FeedContainer
        feedHeaderMarginTop={feedHeaderMarginTop}
        feedState={feedStatement}
        whichUser={loginUser}
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
