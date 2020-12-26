import createRequester from './createRequester';

const API_URL = process.env.REACT_APP_API_URL;

const requester = createRequester();

export async function getUserInfoAPI() {
  return requester.get(`${API_URL}/users/me`);
}

export async function loginAPI(data) {
  return requester.post(`${API_URL}/auth/login`, data);
}

export async function registerAPI(data) {
  return requester.post(`${API_URL}/auth/register`, data);
}

export async function getProvincesAPI() {
  return requester.get(`${API_URL}/locations/provinces`);
}

export async function getDistrictsByProvinceAPI(province_id) {
  return requester.get(`${API_URL}/locations/provinces/${province_id}/districts`);
}

export async function getWardsByDistrictAPI(district_id) {
  return requester.get(`${API_URL}/locations/districts/${district_id}/wards`);
}

export async function getAttributesAPI() {
  return requester.get(`${API_URL}/attributes`);
}

export async function addAttributeAPI(data) {
  return requester.post(`${API_URL}/attributes`, data);
}

export async function deleteAttributeAPI(id) {
  return requester.delete(`${API_URL}/attributes/${id}`);
}
