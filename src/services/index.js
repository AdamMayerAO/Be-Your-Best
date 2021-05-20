import axios from 'axios';

const APIClient = axios.create({
    baseURL: ''
});

export const setJwtTokenInHeaders = (token) => {
    APIClient.defaults.headers.common['Authorization'] = `${token}`;
}

export default APIClient;