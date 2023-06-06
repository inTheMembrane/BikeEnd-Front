import axios from 'axios';

const getToken = async () => {
  const tokenWithoutQuotes = await localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1');
  console.log('tokenWithoutQuotes : ',tokenWithoutQuotes)
  return tokenWithoutQuotes;

};
// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PRIVATE_API_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
