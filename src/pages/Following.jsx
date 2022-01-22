import React from 'react';
import { useParams } from 'react-router-dom';
import FollowingContainer from '../components/profile/FollowingContainer';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
import FollowHeader from '../components/header/FollowHeader';

function Following() {
  const params = useParams().accountname;

  return (
    <div>
      <PageTitle title="Follow" />
      <FollowHeader name="Followings" />
      <FollowingContainer loginUser={params} />
      <Navbar />
    </div>
  );
}

export default Following;
