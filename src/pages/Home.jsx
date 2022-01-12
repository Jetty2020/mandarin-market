import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import PageTitle from '../components/PageTitle';
=======
import Navbar from '../components/common/Navbar';
import PageTitle from '../components/common/PageTitle';
>>>>>>> 7649b1832a5b25729f104f6296e1f069bbcaa5b5
import { loginUser } from '../redux/action/user';

function Home() {
  const data = useSelector((state) => state.user);
  console.log('home', data);

  return (
    <div>
      <PageTitle title="Home" />
      <Link to="/login">to Login</Link>
      <div>Home</div>
<<<<<<< HEAD
=======
      <Link to="/profile">to profile</Link>
      <Navbar />
>>>>>>> 7649b1832a5b25729f104f6296e1f069bbcaa5b5
    </div>
  );
}

export default Home;
