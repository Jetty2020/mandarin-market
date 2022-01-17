import React from 'react';
import { useParams } from 'react-router-dom';
import FollowingContainer from '../components/profile/FollwoingContainer';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';

function Following() {
  const params = useParams().accountname;

  return (
    <div>
      <PageTitle title="Follow" />
      <FollowingContainer loginUser={params} />
      <Navbar />
    </div>
  );
}

export default Following;
