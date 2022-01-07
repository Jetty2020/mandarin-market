import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import PageTitle from '../components/PageTitle';
import { loginUser } from '../redux/action/user';

function Login() {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      user: {
        email: 'id',
        password: 'password',
      },
    };
    dispatch(loginUser(dataToSubmit)).then((response) => {
      if (response.payload) {
        if (response.payload.success) {
          // setCookie('token', response.payload.data.jwt);
          // router.push(`/`);
          console.log(response.payload);
        } else {
          console.log(response.payload);
        }
      } else {
        // alert('연결 오류');
      }
    });
  };

  return (
    <div>
      <PageTitle title="Login" />
      <div>Login</div>
      <form onSubmit={onSubmit}>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
