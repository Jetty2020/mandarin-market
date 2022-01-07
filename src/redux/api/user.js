import axios from 'axios';
import { SERVER_BASE_URL } from '../../constants';

export const userAPI = {
  loginUser: (data) =>
    axios
      .post(`${SERVER_BASE_URL}/user/login`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data),
  // registerUser: (data) =>
  //   axios
  //     .post(`${SERVER_BASE_URL}/user/register`, data)
  //     .then((res) => res.data),
};
