import createRequester from './createRequester';

const API_URL = process.env.REACT_APP_API_URL;

const requester = createRequester();

export async function getUserInfoAPI() {
  return requester.get(`${API_URL}/users/me`);
}

export async function loginAPI(data) {
  return requester.post(`${API_URL}/auth/login`, data);
}
