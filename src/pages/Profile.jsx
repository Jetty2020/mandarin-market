import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/profile/ProfileCard';
import SellingContainer from '../components/profile/SellingContainer';
import FeedContainer from '../components/profile/FeedContainer';
import Navbar from '../components/common/Navbar';

function Profile() {
  return (
    <YourProfile>
      <ProfileCard />
      <SellingContainer />
      <FeedContainer />
      <Navbar />
    </YourProfile>
  );
}

export default Profile;

const YourProfile = styled.div`
  background-color: #f2f2f2;
`;
