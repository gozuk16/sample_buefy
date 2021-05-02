import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:3000/'
});

export default {
  getPosts (params) {
    return client.get('/Posts', params);
  },
  getData (params) {
    return client.get('/data', params);
  },
  getColumns (params) {
    return client.get('/columns', params);
  }
};
