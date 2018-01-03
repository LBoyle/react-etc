import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthToken from '../utils/setAuthToken';

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:8000/api/v1/login', userData)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        return res.data;
      })
      .catch(err => {
        // console.log(err);
        return err;
      });
  }
}
