import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/profile/ProfileCard';
import SellingContainer from '../components/profile/SellingContainer';
import FeedContainer from '../components/profile/FeedContainer';
import Navbar from '../components/common/Navbar';

function Profile() {
  const [sellingStatement, setSellingState] = useState(true);
  const [feedStatement, setFeedState] = useState(true);
  const feedHeaderMarginTop = sellingStatement ? '0px' : '316px';
  return (
    <YourProfile>
      <ProfileCard />
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
