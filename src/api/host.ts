import axios from 'axios';

export const log = () =>
  axios.create({
    baseURL: 'https://reqres.in/api/users',
    headers: {
      contentType: 'application/json',
    },
  });

// Generic get call ==> used with react-query
export const getFromApi = async (params: {}) => {
  const {data} = await log().get('/', {params});
  return data?.data;
};
