import axios from 'axios';
import config from '../config'

const APIClient = axios.create({
    baseURL: config.API_ENDPOINT
});

export const setJwtTokenInHeaders = (token) => {
    APIClient.defaults.headers.common['Authorization'] = `${token}`;
}

export default APIClient;