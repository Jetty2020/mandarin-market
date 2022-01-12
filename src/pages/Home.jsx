import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';

function Home() {
  return (
    <div>
      <PageTitle title="Home" />
      <div>Home</div>
      <Link to="/profile">to profile</Link>
      <Navbar />
    </div>
  );
}

export default Home;
