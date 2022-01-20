import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
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

  useEffect(() => {
    setLoginUser(typeof accountname === 'undefined' ? account : accountname);
  }, [accountname]);

  return (
    <>
      <PageTitle title="Profile" />
      <Header />
      <YourProfile>
        <ProfileCard loginUser={loginUser} />
        <SellingContainer
          sellingState={sellingStatement}
          whichUser={loginUser}
        />
        <FeedContainer
          feedHeaderMarginTop={feedHeaderMarginTop}
          feedState={feedStatement}
          whichUser={loginUser}
        />
      </YourProfile>
      <Navbar />
    </>
  );
}

export default Profile;

const YourProfile = styled.div`
  position: relative;
  background-color: #f2f2f2;
`;
