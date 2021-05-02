import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'application/json'
});
api.interceptors.request.use(request => {
  performance.mark('start');
  return request;
});
api.interceptors.response.use(
  // 2XX範囲内のステータスコード
  (response) => {
    performance.mark('finish');
    performance.measure('request-to-response', 'start', 'finish');
    const message = `api time: ${performance.getEntriesByName('request-to-response')[0].duration}`;
    console.log(message);
    return response;
  },
  // 2XX範囲外のステータスコード
  (error) => {
      return Promise.reject(error);
  }
);
export default api;

