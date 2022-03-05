import React from 'react';
import PageTitle from '../components/common/PageTitle';
import LoginPage from '../components/login/LoginPage';
import SplashScreen from '../components/home/SplashScreen';

function Login() {
  return (
    <>
      <PageTitle title="Login" />
      <LoginPage />
      <SplashScreen />
    </>
  );
}

export default Login;
