import createRequester from './createRequester';

const API_URL = process.env.REACT_APP_API_URL;

const requester = createRequester();

export const uploadImageAPI = (file, params) => {
  const formData = new FormData();
  formData.set('file', file);
  return requester.post(`${API_URL}/images`, formData, {
    headers: {'Content-Type': 'multipart/form-data'},
    params,
  });
};

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

export async function addRoomApi(data) {
  return requester.post(`${API_URL}/rooms`, data);
}

export async function updateRoomApprovedStatusAPI(id, approved_status) {
  return requester.put(`${API_URL}/rooms/${id}`, {approved_status});
}

export async function getRoomsAPI(params) {
  return requester.get(`${API_URL}/rooms`, {params});
}
