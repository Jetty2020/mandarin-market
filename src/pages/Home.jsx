import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
import { loginUser } from '../redux/action/user';

function Home() {
  const data = useSelector((state) => state.user);
  console.log('home', data);

  return (
    <div>
      <PageTitle title="Home" />
      <Link to="/login">to Login</Link>
      <div>Home</div>
      <Link to="/profile">to profile</Link>
      <Navbar />
    </div>
  );
}

export default Home;
