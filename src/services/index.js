import axios from 'axios';

const APIClient = axios.create({
    baseURL: 'http://localhost:8000'
});

export const setJwtTokenInHeaders = (token) => {
    APIClient.defaults.headers.common['Authorization'] = `${token}`;
}

export default APIClient;