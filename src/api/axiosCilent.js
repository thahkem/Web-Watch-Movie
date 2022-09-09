import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const axiosCilent = axios.create({
   baseURL: apiConfig.baseUrl,
   headers: {
      'Content-type': 'application/json',
   },
   paramsSerializer: (param) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

axiosCilent.interceptors.request.use(async (config) => config);
axiosCilent.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data;
      }
      return response;
   },
   (error) => {
      throw error;
   },
);

export default axiosCilent;
