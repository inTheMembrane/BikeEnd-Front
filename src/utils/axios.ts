import axios from 'axios';

const getToken = () : string => {
  const token = localStorage.getItem('token');
  let formatedToken = '';
  if (token) { formatedToken = JSON.parse(token); }
  return formatedToken;
};
// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PRIVATE_API_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
