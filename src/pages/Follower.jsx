import React from 'react';
import { useParams } from 'react-router-dom';
import FollowerContainer from '../components/profile/FollowerContainer';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
import FollowHeader from '../components/header/FollowHeader';

function Follower() {
  const params = useParams().accountname;

  return (
    <div>
      <PageTitle title="follower" />
      <FollowHeader name="Followers" />
      <FollowerContainer whichUser={params} />
      <Navbar />
    </div>
  );
}

export default Follower;
